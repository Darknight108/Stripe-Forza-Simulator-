document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');
    const priceIds = {
        'Playseat® Evolution PRO Red Bull Racing Esports': 'price_1QSUMCKNpgOvwdtQNtL3g6bp',
        'Playseat® Formula Instinct - Edición F1®': 'price_1QSUTfKNpgOvwdtQDSgpyoCh',
        'Playseat® Challenge X - Logitech G Edition': 'price_1QSUVfKNpgOvwdtQr7kZp5Rr',
        'Thrustmaster T818 Ferrari SF1000': 'price_1QSUZMKNpgOvwdtQjYnb2MKd',
        'Thrustmaster TS-XW Sparco': 'price_1QSUaeKNpgOvwdtQwqP4FVGQ',
        'Thrustmaster T-GT II': 'price_1QSUc8KNpgOvwdtQk3EsDghd',
    };

    buyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const productName = button.previousElementSibling.textContent.trim();
            const priceId = priceIds[productName];

            if (!priceId) {
                alert('Error: Producto no configurado.');
                return;
            }

            const response = await fetch('http://localhost:4242/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ priceId }),
            });

            const { url } = await response.json();
            window.location = url;
        });
    });
});
