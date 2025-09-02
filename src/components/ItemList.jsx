import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => (
  <div className="item-list" style={{
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
    {products.map((product) => (
      <Item key={product.id} product={product} />
    ))}
  </div>
);

export default ItemList;