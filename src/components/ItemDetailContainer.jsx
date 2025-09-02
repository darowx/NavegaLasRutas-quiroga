import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const product = products.find(prod => prod.id === Number(itemId));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <div>
        <h2>Producto no encontrado</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div style={{padding: '2rem'}}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{width: '300px'}}/>
      <p>{product.description}</p>
      <span>Categoría: {product.category}</span><br/>
      <span>Precio: ${product.price}</span><br/>
      <span>Stock: {product.stock}</span><br/>
      <button
        onClick={() => addToCart(product)}
        style={{margin: '1rem 0', padding: '0.5rem 1.5rem', fontSize: '1rem'}}
      >
        Agregar al carrito
      </button>
      <br />
      <Link to="/">Volver al catálogo</Link>
    </div>
  );
};

export default ItemDetailContainer;