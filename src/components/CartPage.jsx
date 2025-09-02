import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{padding: '2rem'}}>
        <h2>Tu carrito está vacío.</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{padding: '2rem'}}>
      <h2>Resumen de tu carrito</h2>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={{borderBottom: '1px solid #ccc'}}>Producto</th>
            <th style={{borderBottom: '1px solid #ccc'}}>Cantidad</th>
            <th style={{borderBottom: '1px solid #ccc'}}>Precio unitario</th>
            <th style={{borderBottom: '1px solid #ccc'}}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td style={{padding: '0.5rem'}}>{item.name}</td>
              <td style={{padding: '0.5rem'}}>{item.quantity}</td>
              <td style={{padding: '0.5rem'}}>${item.price}</td>
              <td style={{padding: '0.5rem'}}>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${total}</h3>
      <Link to="/">Seguir comprando</Link>
    </div>
  );
};

export default CartPage;