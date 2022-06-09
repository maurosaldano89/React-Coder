import React from 'react';
import Item from './Item';

const ItemList = (productos) => {
  return (
    <>
      {productos?.map(producto => <Item key={producto.id} products={producto} />)}
    </>
  );
}

export default ItemList;
