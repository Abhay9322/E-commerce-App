import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function Admin() {
    const [form, setForm] = useState({
        name:'',
        price:'',
        description:'',
        image:''
    });

    const handleChange = (e) => {
        setForm({...form,[e.target.name] : e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/products',form);
        alert('Product added!');
        setForm({ name:'',price:'',description:'',image:''});
    };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Name' value={form.name} onChange={handleChange}/><br />
        <input name='price' placeholder='Price' value={form.price} onChange={handleChange} /><br />
        <input name='description' placeholder='Description' value={form.description} onChange={handleChange} /><br />
        <input name='image' placeholder='Image URL' value={form.image} onChange={handleChange} /><br />
        <button type='submit'>Add Product</button>

      </form>
    </div>
  )
}

export default Admin;
