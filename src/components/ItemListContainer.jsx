import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import products from '../helpers/Array'
import { useParams } from "react-router-dom";




const ItemListContainer = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        (!id) ? res(products) : res(products.filter(item => item.category === id));
        console.log(products)

      }, 2000);
    });

    promise
      .then(result => {
        setListProducts(result);

      })
      .catch(error => {
        setError(true)
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Hubo un error, intente más tarde"}</div>
      <ItemList listProducts={listProducts} />

    </>
  )
};

export default ItemListContainer;
