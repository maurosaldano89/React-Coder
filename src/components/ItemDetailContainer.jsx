import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import products from '../helpers/Array'




const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const { id, name, details, price, stock, image, category } = products


  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(products.find(product => product.id === id));

      }, 2000);
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
  }, []);

  return (
    <div className="container top-to-navbar-2">
      <div className="row">

        <div className="d-flex align-items-center justify-content-center">
          <span className="me-4">Loading product...</span>
          <div className="spinner-grow bg-gradient shadow-lg " role="status"></div>
        </div>
        :
        <ItemDetail singleProduct={singleProduct} />
      </div>
    </div >

  )

}


export default ItemDetailContainer;