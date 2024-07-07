import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error buscando el prodcuto:", error));
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <div className="product-detail-info">
        <h1 className="product-detail-title">{product.title}</h1>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-price">${product.price}</p>
        <button className="product-detail-button">Comprar</button>
      </div>
    </div>
  );
};

export default ProductDetail;
