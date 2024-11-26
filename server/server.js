
require("dotenv").config();
const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());


const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


const YOUR_DOMAIN = "http://localhost:3000";


app.post("/create-checkout-session", async (req, res) => {
    const cart = req.body.cart;


    if (!cart || cart.length === 0) {
        return res.status(400).send("No items in the cart");
    }


    const lineItems = cart.map(item => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: item.name,
            },
            unit_amount: item.price * 100,
        },
        quantity: item.quantity,
    }));

    try {

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${YOUR_DOMAIN}/fail`,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating Checkout session:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

const port = 5000; // Server Port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
