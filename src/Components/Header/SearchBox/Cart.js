import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ onClose }) => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Cricket Bat', price: 2100, quantity: 1 },
        { id: 2, name: 'Racket', price: 1500, quantity: 2 }
    ]);

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
        .toLocaleString('en-PK', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

    const handleAddQuantity = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
    };

    const handleRemoveQuantity = (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedItems);
    };

    return (
        <div className="cart-overlay">
            <div className="cart-screen">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Your Cart</h2>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <div className="item-details">
                                <span className="item-name">{item.name}</span>
                                <span className="item-price">{item.price.toLocaleString('en-PK', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                            </div>
                            <div className="quantity-control">
                                <button className="quantity-button" onClick={() => handleRemoveQuantity(item.id)}>-</button>
                                <span className="quantity-number">{item.quantity}</span>
                                <button className="quantity-button" onClick={() => handleAddQuantity(item.id)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    <h3>Total: {totalAmount}</h3>
                </div>
                <div className="payment-section">
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
