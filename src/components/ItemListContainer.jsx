import React, { useEffect, useState } from 'react';
import products from '../data/products';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loader from './Loader';

const ItemListContainer = ({ saludo }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (categoryId) {
        setItems(products.filter(prod => prod.category === categoryId));
      } else {
        setItems(products);
      }
      setLoading(false);
    }, 1000);
  }, [categoryId]);

  return (
    <div>
      <h2>{saludo}</h2>
      {loading ? (
        <Loader />
      ) : items.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <ItemList products={items} />
      )}
    </div>
  );
};

export default ItemListContainer;