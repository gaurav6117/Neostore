const mongoose = require("mongoose")
const placedorderSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now,
    },
    products: {
        type: Array,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }   
})
module.exports = mongoose.model('placedOrder', placedorderSchema)