const express = require("express");
const router = express.Router();
const productModel = require("../Db/productSchema")
const cartModel = require("../Db/cartSchema")
const addressModel = require("../Db/addressSchema")
const placedorderModel = require("../Db/placedorderSchema")
const jwt = require("jsonwebtoken");
const jwtSecret = "asdasd324234#@$dgdfg";
function authenticateToken(req, res, next) { 
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    if (token == null) {
        res.json({ "err": 1, "msg": "Token not match" })
    }  
    else {
        jwt.verify(token, jwtSecret, (err, data) => {
            if (err) {
                res.json({ "err": 1, "msg": "Token incorrect" })
            }
            else {
                console.log("Match")
                next();
            }
        })
    }
}
router.get("/", (req, res) => {
    productModel.find().populate(["category_id", "color_id"]).then(product => {
        res.send(product)
    })
})
// --------------------------------------add to cart login----------------------
router.post('/fetchcart',(req, res) => {
    cartModel.findOne({ user_email: req.body.email }, (err, data) => {
        if (err) throw err;
        if (data) {
            res.send(data)
        }
    })
})
router.post('/setcart', (req, res) => {
    cartModel.updateOne({ user_email: req.body.email }, { $set: { cart_value: req.body.cartData } }, (err, data) => {
        if (err) {
            console.log(err);
            res.send(err)
        }
        else {
            res.send(data)
        }
    })
})

// --------------------------------------orders----------------------
router.post('/fetchplacedorder', (req, res) => {
    placedorderModel.find({ user_email: req.body.email }, (err, data) => {
        if (err) throw err;
        if (data) {
            res.send(data)
        }
    })
}) 
router.post("/addplacedorder", (req,res)=>{
    new placedorderModel({email:req.body.email, amount:req.body.amount, address:req.body._address ,products: JSON.parse(req.body.productData)}).save((err,data)=>{
        if(data){
            res.json({success:true, odata:data})
        }
        else{
            res.json({success:false, message:err})
        }
    })
})
// -----------------------------------------Address Routes ----------------------
router.post('/fetchaddress', (req, res) => {
    addressModel.findOne({ user_email: req.body.email }, (err, data) => {
        if (err) throw err;
        if (data) {
            res.send(data)
        }
    })
})
router.post('/setaddress', (req, res) => {
    addressModel.updateOne({ user_email: req.body.email }, { $set: { address: req.body.addressArr } }, (err, data) => {
        if (err) throw err;
        else {
            res.json({ success: true })
        }
    })
})

module.exports = router;