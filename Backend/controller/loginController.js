const loginModel = require("../Db/loginSchema");
const cartModel = require("../Db/cartSchema");
const addressModel = require("../Db/addressSchema")
async function logindata(edata) {
    let ins = await new loginModel(edata)
    ins.save((err, data) => {
        if (err) throw err;
    })
}
async function cartdata(edata) {
    let ins = await new cartModel(edata)
    ins.save((err, data) => {
        if (err) throw err;
    })
}
async function addressdata(edata) {
    let ins = await new addressModel(edata)
    ins.save((err, data) => {
        if (err) throw err;
    })
}
module.exports = { logindata, cartdata, addressdata }