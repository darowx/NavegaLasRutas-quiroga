import React from 'react';
import './App.css'; // <--- asegúrate de importar el CSS
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './components/CartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo="¡Bienvenido a Mi Tienda! Explora los mejores productos aquí." />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer saludo="¡Bienvenido! Filtrando por categoría." />}
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailContainer />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="*"
            element={<div>404 - Página no encontrada</div>}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
