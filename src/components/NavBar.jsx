import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    background: '#eee'
  }}>
    <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Mi Tienda</span>
    <div style={{display: 'flex', gap: '2rem'}}>
      <Link to="/" style={{textDecoration: 'none'}}>Inicio</Link>
      <Link to="/category/ropa" style={{textDecoration: 'none'}}>Ropa</Link>
      <Link to="/category/calzado" style={{textDecoration: 'none'}}>Calzado</Link>
    </div>
    <Link to="/cart"><CartWidget /></Link>
  </nav>
);

export default NavBar;