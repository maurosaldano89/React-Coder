import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import products from '../helpers/Array'



const ItemListContainer = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [listProducts, setListProducts] = useState([]);


  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);

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
  }, [products]);

  return (
    <>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Hubo un error, intente más tarde"}</div>
      <ItemList listProducts={listProducts} />

    </>
  )
};

export default ItemListContainer;
