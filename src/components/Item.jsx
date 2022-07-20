import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

  const { stock, price, name, id, image, category } = product
  return (
    <div className="card-wrap">
      <article className="card">
        <header className="header-card">
          <img src={image} alt="img of product" />
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
            <Link className="btn" to={'/item/' + id} >Comprar</Link>
          </div>
        </footer>
      </article>
    </div>
  )
}

export default Item
