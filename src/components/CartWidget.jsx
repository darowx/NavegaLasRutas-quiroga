import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <span style={{fontSize: '1.5rem'}}>
      🛒 {getTotalQuantity()}
    </span>
  );
};

export default CartWidget;