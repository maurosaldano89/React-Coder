import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import products from '../helpers/Array'
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();



  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(products.find(item => item.id == id));

      }, 1000);
    });

    promise
      .then(result => {
        setSingleProduct(result);

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
      <div className="container top-to-navbar-2">
        <div>{loading && "Loading..."}</div>
        <div>{error && "Hubo un error, intente más tarde"}</div>
        <ItemDetail singleProduct={singleProduct} />
      </div>
    </>

  )

}


export default ItemDetailContainer;