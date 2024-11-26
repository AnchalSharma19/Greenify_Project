import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import "./Shop.css";
import pOne from '../images/pOne.webp'
import pTwo from '../images/pTwo.jpg'
import pThree from '../images/pThree.webp'
import pFour from '../images/pFour.webp'
import pFive from '../images/pFive.webp'
import pSix from '../images/pSix.webp'
import pSeven from '../images/pSeven.webp'
import pEight from '../images/pEight.webp'
import pnine from '../images/pnine.webp'
import pten from '../images/pten.webp'
import peleven from '../images/peleven.avif'
import ptwelve from '../images/ptwelve.avif'
import pthirteen from '../images/pthirteen.avif'
import pfourteen from '../images/pfourteen.avif'
import pfifteen from '../images/pfifteen.avif'
import psixteen from '../images/psixteen.webp'
import pseventeen from '../images/pseventeen.webp'
import peighteen from '../images/peighteen.webp'
import pnineteen from '../images/pninteen.webp'
import ptwenty from '../images/ptwenty.webp'
import ptwentyone from '../images/ptwentyone.jpg'
import ptwentytwo from '../images/ptwentytwo.jpg'
import ptwentythree from '../images/ptwentythree.jpg'
import ptwentyfour from '../images/ptwentyfour.avif'
import ptwentyfive from '../images/ptwentyfive.webp'
import ptwentysix from '../images/ptwentysix.webp'
import ptwentyseven from '../images/ptwentyseven.webp'
import ptwentyeight from '../images/ptwentyeight.webp'



const stripePromise = loadStripe("pk_test_51QLV6QCfk5PC6RfiMqzfYSp5sVIROqDEgHJs5rX4L1W32DInLdwGZkA0baWqjlMgyqQD6cUwEhXW2TtY1NCeCgSZ0068dhYsC7");



const Shop = () => {
    const [cart, setCart] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        setCartVisible(true);
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            const response = await fetch("http://localhost:5000/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ cart }),
            });

            if (!response.ok) {
                throw new Error("Failed to create checkout session");
            }

            const session = await response.json();
            const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) {
                console.error("Stripe Checkout error:", result.error.message);
            }
        } catch (error) {
            console.error("Error handling payment:", error.message);
        }
    };

    const closeCart = () => {
        setCartVisible(false);
    };

    const products = [
        { id: 1, name: "Women T-Shirt", price: 599, image: pOne },
        { id: 2, name: "Women T-Shirt", price: 399, image: pTwo },
        { id: 3, name: "Women T-Shirt", price: 459, image: pThree },
        { id: 4, name: "Women T-Shirt", price: 599, image: pFour },
        { id: 5, name: "Men T-Shirt", price: 399, image: pFive },
        { id: 6, name: "Men T-Shirt", price: 450, image: pSix },
        { id: 7, name: "Men T-Shirt", price: 499, image: pSeven },
        { id: 8, name: "Men T-Shirt", price: 399, image: pEight },
        { id: 9, name: "Cotton T-shirt", price: 600, image: pnine },
        { id: 10, name: "Cotton T-shirt", price: 499, image: pten },
        { id: 11, name: "Cotton T-shirt", price: 499, image: peleven },
        { id: 12, name: "Cotton T-shirt", price: 399, image: ptwelve },
        { id: 13, name: "Recycled shopping bag", price: 299, image: pthirteen },
        { id: 14, name: "Recycled shopping bag", price: 299, image: pfourteen },
        { id: 15, name: "Recycled shopping bag", price: 359, image: pfifteen },
        { id: 16, name: "Recycled shopping bag", price: 359, image: psixteen },
        { id: 17, name: "Real Wood case", price: 159, image: pseventeen },
        { id: 18, name: "Real Wood case", price: 200, image: peighteen },
        { id: 19, name: "Real Wood case", price: 199, image: pnineteen },
        { id: 20, name: "Real Wood case", price: 200, image: ptwenty },
        { id: 21, name: "Hair barrette-handmade recycled", price: 159, image: ptwentyone },
        { id: 22, name: "Hair barrette-handmade recycled", price: 129, image: ptwentytwo },
        { id: 23, name: "Hair barrette-handmade recycled", price: 150, image: ptwentythree },
        { id: 24, name: "Hair barrette-handmade recycled", price: 199, image: ptwentyfour },
        { id: 25, name: "Recycled plastic earrings", price: 199, image: ptwentyfive },
        { id: 26, name: "Recycled plastic earrings", price: 199, image: ptwentysix },
        { id: 27, name: "Recycled plastic earrings", price: 199, image: ptwentyseven },
        { id: 28, name: "Recycled plastic earrings", price: 199, image: ptwentyeight }

    ];

    return (
        <div className="shop-container">
            <h1 className="shopGreenify">Shop at Greenify</h1>
            <br />
            <h1 className="shop-title">Where Sustainability Meets Style</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">₹{product.price}</p>
                        <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {cartVisible && (
                <div className="cart-summary">
                    <button className="close-cart-button" onClick={closeCart}>
                        ×
                    </button>
                    <h2>Cart Summary</h2>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <span>{item.name}</span>
                            <span>₹{item.price} x {item.quantity}</span>
                            <div className="cart-item-actions">
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <strong>Total: ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</strong>
                    </div>
                    <button className="checkout-button" onClick={handlePayment}>
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Shop;
