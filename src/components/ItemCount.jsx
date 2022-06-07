import React, { useState } from 'react';

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [count, setCount] = useState(inicial)

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1)
    } else {
      alert("No puede agregar más productos")
    }
  }
  const restar = () => {
    if (count > inicial) {
      setCount(count - 1)
    } else {
      alert('No puedes restar mas productos')
    }

  }
  const reset = () => {
    setCount(inicial)
  }

  return (
    <div>
      <div>
        <button onClick={sumar}>+</button>
        <span>{count}</span>
        <button onClick={restar}>-</button>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={() => { onAdd(count); reset() }} type="button">Agregar al carrito</button>
    </div >
  );
}

export default ItemCount;
