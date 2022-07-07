const mongoose = require('mongoose');

const OrderSchema = mongoose.schema({

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
    ],
    amount:{type:'number',required: true},
    address : {type: 'string',required: true},
    status:{type: 'string', default: 'pending'},
    },
    {timestamps : true}

);

module.exports = mongoose.model('Order', OrderSchema);