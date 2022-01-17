const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
    user_email:{
        type:String,
        required:true,
        unique:true
    },
    cart_value:{
        type:String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Cart Items', cartSchema)