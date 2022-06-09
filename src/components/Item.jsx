import React from 'react'
import ItemCount from './ItemCount'

const Item = (producto) => {
  const { stock, price, name, id, image } = producto
  return (
    <div className="card-wrap">
      <article className="card">
        <header className="header-card">
          <img src={image} alt="images" />
        </header>
        <footer className="footer-card">
          <div className="categoria-card">
            <span>Categoria</span>
          </div>
          <div className="name-card">
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{stock}</p>
            <ItemCount />
          </div>
        </footer>
      </article>
    </div>
  )
}

export default Item
