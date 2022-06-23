import React from 'react'
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Cart() {

  const { deleteItem, emptyCart } = useContext(CartContext);
  return (

    <>
      {cartItems.length > 0 ? (
        <div className="col-lg-3 cart-container">
          <h3 className="cart-name"> {name} </h3>
          <div className="cart-img-container">
            <img src={imagen} alt="nombre" className="img-fluid" />
          </div>
          <div className="cart-txt-container mt-3">
            <p><span className="fw-bold">Precio:</span> {price}</p>
            <p><span className="fw-bold">Items Agregadas:</span> {unidades}</p>
            <button onClick={() => { deleteItem(id) }} className="nav-item mt-5"> Eliminar Producto</button>
            <button onClick={() => { emptyCart() }} className="nav-item mt-5"> Vaciar Carrito</button>
          </div>
        </div>
      )}
    </>

  )
}