import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => (
  <div className="item-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <span>Categoría: {product.category}</span><br/>
    <span>Precio: ${product.price}</span><br/>
    <span>Stock: {product.stock}</span><br/>
    <Link to={`/item/${product.id}`}>Ver detalle</Link>
  </div>
);

export default Item;