import React from 'react';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CartItem from './components/CartItem';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<CartItem />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
      
    </div>
  )
}

export default App;
