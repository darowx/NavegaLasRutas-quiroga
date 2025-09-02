import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const handleAdd = () => setCount(count + 1);
  const handleSub = () => count > 1 && setCount(count - 1);

  return (
    <div>
      <button onClick={handleSub}>-</button>
      <span style={{margin: '0 10px'}}>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button style={{marginLeft: 10}}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;