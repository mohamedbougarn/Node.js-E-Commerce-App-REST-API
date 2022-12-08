const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({

    userId: {type: 'string', required: true,unique: true},
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: 'number',
                default: 1,
                required: true
            }, 
        }
    ]
    },
    {timestamps : true}

);

module.exports = mongoose.model('Cart', CartSchema);