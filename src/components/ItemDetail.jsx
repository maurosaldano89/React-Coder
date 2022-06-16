import ItemCount from "./ItemCount"
import './itemDetail.css';

const ItemDetail = ({ singleProduct }) => {
  const { name, image, price, details, stock, category } = singleProduct
  const onAdd = (count) => {
    alert(`Se agregaron ${count} productos al carrito`)
  }
  return (

    <div className="card-wrap">
      <article className="card">
        <header className="header-card">
          <img src={image} alt="images" />
        </header>
        <footer className="footer-card">
          <div className="categoria-card">
            <span>Categoria : {category}</span>
          </div>
          <div className="name-card">
            <h3>Nombre:{name}</h3>
            <p>Precio: {price}</p>
            <p>Stock: {stock}</p>
            <p>Detalles de producto : {details}</p>
            <ItemCount onAdd={onAdd} stock={stock} inicial={1} />
          </div>
        </footer>
      </article>
    </div>
  )
}

export default ItemDetail
