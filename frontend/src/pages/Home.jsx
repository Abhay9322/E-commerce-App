import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ProductItem from '../components/Productem.jsx';


function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      };
      fetchProducts();
    }, []);
    
  return (
    <div>
      <h2>Products</h2>
      <div  style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
            <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
