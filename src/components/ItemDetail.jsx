import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"
import './itemDetail.css';
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ singleProduct }) => {
  const { name, image, price, details, stock, category } = singleProduct
  const [unidades, setUnidades] = useState();
  const { isInCart, addItem } = useContext(CartContext)

  const onAdd = (count) => {
    alert(`Se agregaron ${count} productos al carrito`)
    setUnidades(count)
    isInCart(singleProduct.id);
    addItem(singleProduct, unidades);
  }
  return (

    <div className="card-wrap-detail">
      <article className="card-detail">
        <header className="header-card-detail">
          <img src={image} alt="images" />
        </header>
        <footer className="footer-card">
          <div className="categoria-card-detail">
            <span>Categoria : {category}</span>
          </div>
          <div className="name-card">
            <h3>Nombre:{name}</h3>
            <p>Precio: {price}</p>
            <p>Stock: {stock}</p>
            <p>Detalles de producto : {details}</p>
            {unidades > 0 ? <Link to={'/cart'} className="btn btn-">Terminar mi compra</Link> : <ItemCount stock={stock} inicial={1} onAdd={onAdd} />}
          </div>
        </footer>
      </article>
    </div>
  )
}

export default ItemDetail
