import React from 'react';

function CartItem() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const handleCheckout = () => {
        localStorage.removeItem('cart');
        alert('Order placed');
    };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
            {cart.map((item,i) => (
                <div key={i} style={{borderBottom: '1px solid gray' }}>
                    <h4>{item.name} - ₹{item.price}</h4>
                </div>
            ))}
        </div>
      )}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartItem;
