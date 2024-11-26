import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51QLV6QCfk5PC6RfiMqzfYSp5sVIROqDEgHJs5rX4L1W32DInLdwGZkA0baWqjlMgyqQD6cUwEhXW2TtY1NCeCgSZ0068dhYsC7");

const Cart = ({ cart }) => {
    const navigate = useNavigate();

    // Dynamically calculate total amount
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Handle the payment process
    const handlePayment = async () => {
        try {
            console.log("Cart data being sent:", cart); // Log the cart data being sent for debugging

            const response = await fetch("http://localhost:5000/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ cart }), // Send cart data to the backend
            });

            if (!response.ok) {
                throw new Error("Failed to create checkout session");
            }

            const session = await response.json();

            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (error) {
                console.error("Error redirecting to Checkout", error);
            }
        } catch (error) {
            console.error("Error processing payment:", error.message);
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} style={{ marginBottom: "10px" }}>
                                <strong>{item.name}</strong> - ₹{item.price} x {item.quantity}
                                <br />
                                Subtotal: ₹{item.price * item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ₹{totalAmount}</h3>
                    <button
                        onClick={handlePayment}
                        style={{
                            backgroundColor: "#4caf50",
                            color: "white",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginTop: "10px",
                        }}
                    >
                        Proceed to Pay
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
