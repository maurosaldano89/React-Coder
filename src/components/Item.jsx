import React from 'react'
import ItemCount from './ItemCount'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  const onAdd = (count) => {
    alert(`Se agregaron ${count} productos al carrito`)
  }
  const { stock, price, name, id, image, category } = product
  return (
    <div className="card-wrap">
      <article className="card">
        <header className="header-card">
          <img src={image} alt="images" />
        </header>
        <footer className="footer-card">
          <div className="categoria-card">
            <span>{category}</span>
          </div>
          <div className="name-card">
            <h5>Nombre:{name}</h5>
            <p>Precio: {price}</p>
            <p>Stock: {stock}</p>
            <Link className="btn btn-" to={'/item/' + id}>Descripción</Link>
            <ItemCount onAdd={onAdd} stock={stock} inicial={1} />
          </div>
        </footer>
      </article>
    </div>
  )
}

export default Item
