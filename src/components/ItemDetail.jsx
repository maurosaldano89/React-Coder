import ItemCount from "./ItemCount"

const ItemDetail = ({ singleProduct }) => {
  const { name, image, price, details, stock, category } = singleProduct
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
            <h3>Nombre:{name}</h3>
            <p>Precio: {price}</p>
            <p>Stock: {stock}</p>
            {/* <button onClick={}></button> */}
            <ItemCount stock={stock} inicial={1} />
          </div>
        </footer>
      </article>
    </div>
  )
}

export default ItemDetail
