import React, { useState } from 'react';
import './counter.css'

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
      <div className="counter">
        <button className="btn" onClick={sumar}>+</button>
        <span>{count}</span>
        <button className="btn" onClick={restar}>-</button>
      </div>
      <div className="counter">
        <button className="btn-" onClick={reset}>Reset</button>
        <button className="btn-" onClick={() => { onAdd(count); reset() }} type="button">Agregar al carrito</button>
      </div>

    </div >
  );
}

export default ItemCount;
