const express= require("express");
const router= express.Router();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'singh.gaurav9770@gmail.com',
        pass: 'Gsc@1234$9770'
    },
    secure:true
    });
// router.post("/testmail",(req,res)=>{
//     let {to}  =req.body;
//     const mailData = {
//         from: 'gaurav.chouhan@neosoftmail.com', 
//           to: to,  
//           subject: 'Order Placed',
//           text: 'That was easy!',
//           html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>'
//         };
//     transporter.sendMail(mailData, function (err, info) {
//         if(err){
//           return console.log(err)
//         }
//         else{
//             res.status(200).send({message:"mail send", message_id: info.messageId})
//         }
//      });
// })
module.exports=transporter;