import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';




const ItemListContainer = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const db = getFirestore(); // obtenemos la base de datos
    const productsCollection = collection(db, 'products'); // obtenemos la colección

    if (id) {
      const q = query(productsCollection, where('categoria', '==', id));
      getDocs(q)
        .then((snapshot) => {
          setListProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
        .catch(error => {
          setError(true)
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setListProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
        .catch(error => {
          setError(true)
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

  }, []);


  return (
    <>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Hubo un error, intente más tarde"}</div>
      <ItemList listProducts={listProducts} />

    </>
  )
};


export default ItemListContainer;
