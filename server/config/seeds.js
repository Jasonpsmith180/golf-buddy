const db = require('./connection');
const { User, Product } = require('../models');

db.once('open', async () => {
    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: '5 Dollar Donation',
            description: '5 Dollar Donation to Golf-Buddy',
            price: 5.00
        },
        {
            name: '10 Dollar Donation',
            description: '10 Dollar Donation to Golf-Buddy',
            price: 10.00
        },
        {
            name: '25 Dollar Donation',
            description: '25 Dollar Donation to Golf-Buddy',
            price: 25.00
        },
        {
            name: '50 Dollar Donation',
            description: '50 Dollar Donation to Golf-Buddy',
            price: 50.00
        },
        {
            name: '100 Dollar Donation',
            description: '100 Dollar Donation to Golf-Buddy',
            price: 100.00
        },
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        username: 'TigerWoods',
        email: 'tigerwoods@email.com',
        password: 'tigerisgreat',
        scores: [
            {
                score: 69,
                par: 72,
                course: 'Torrey Pines'
            }
        ]
    });

    await User.create({
        username: 'PhilMickelson',
        email: 'philmickelson@email.com',
        password: 'phil12345',
        scores: [
            {
                score: 70,
                par: 72,
                course: 'Pebble Beach'
            }
        ]
    });

    console.log('users seeded');

    process.exit();
});