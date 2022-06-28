import { createContext, useState } from 'react';

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agrega un producto al carrito sin repetir
  const addItem = (item, qty) => {
    const newItem = {
      ...item,
      qty,
    };

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].qty += qty;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Detecta si el producto ya esta en el carrito TRUE / FALSE
  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  // Vacia el carrito
  const emptyCart = () => {
    setCart([]);
  };

  // Elimina un producto del carrito
  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  // devuelve la cantidad de un producto en el carrito
  const getItemQty = () => {
    return cart.reduce((acc, item) => (acc += item.qty), 0);
  };

  // devuelve el precio del producto
  const getItemPrice = () => {
    return cart.reduce((acc, item) => (acc += item.price * item.qty), 0);
  };

  return (
    <Provider value={{ cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice }}> {children} </Provider>);
};

export default MyProvider;