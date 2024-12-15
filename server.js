require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(bodyParser.json());

const YOUR_DOMAIN = 'http://localhost:5500';

app.post('/create-checkout-session', async (req, res) => {
    const { priceId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `http://localhost:5500/assets/success.html`,
            cancel_url: 'http://localhost:5500/assets/cancel.html',});

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.listen(4242, () => console.log('Server running on port 4242'));
