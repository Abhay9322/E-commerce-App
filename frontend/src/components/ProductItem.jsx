import React from 'react'

function ProductItem({ product }) {
    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart',JSON.stringify(cart));
        alert('Added to cart!')
    };

  return (
    <div style={{border: '1px solid #ccc', padding: '10px', width: '200px'}}>
      <img src={product.image} alt={product.name}  width="100%" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹ {product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
