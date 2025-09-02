import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    // Si el producto ya está en el carrito, suma 1
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Obtener cantidad total de productos en el carrito
  const getTotalQuantity = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};