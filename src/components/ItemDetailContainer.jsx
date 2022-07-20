import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  const db = getFirestore();
  const coleccion = 'products';


  useEffect(() => {
    const productFound = doc(db, coleccion, id);
    getDoc(productFound).then((res) => {
      if (res.exists()) {
        setSingleProduct({ ...res.data(), id: res.id })
        setLoading(false);
      } else {
        alert("No se encontro el producto")
      }
    })
  }, [id])




  return (
    <>
      <div className="container top-to-navbar-2">
        <div>{loading && "Loading..."}</div>
        <div>{error && "Hubo un error, intente más tarde"}</div>
        <ItemDetail singleProduct={singleProduct} />
      </div>
    </>

  )

}


export default ItemDetailContainer;