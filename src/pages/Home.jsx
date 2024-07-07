import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="home-container">
      <h1>Productos</h1>
      <ul className="product-card">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <Link to={`/product/${product.id}`} className="product-link">Ver Detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
