const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51NKDMoKFdiBCuGhvhQd7YwzAZHykQLD5IKEMsuptil0CvzSZJsbeAal19VAyghgaagqqlhPi8S3aOJhbsMAgkz6a00eRG6Cz1H')
const order = require('../models/orderModel');
const Router = require('router');

router.post('/placeorder',async (req,res)=>{

    const{token, subtotal, currentUser, cartItems} = req.body

    try {
        const customer = await stripe.customers.create({
            email : token.email,
            source: token.id
        })

        const payment = await stripe.charges.create({
            amount : subtotal * 100,
            currency : "LKR",
            customer : customer.id,
            receipt_email : token.email
        },{
            idempotencyKey : uuidv4()
        })

        if(payment)
        {
            const neworder = new order({
                name : currentUser.name,
                email : currentUser.email,
                userid : currentUser._id,
                orderItems : cartItems,
                orderAmount : subtotal,
                shippingAddress : {
                    street : token.card.address_line1,
                    city : token.card.address_city,
                    country : token.card.address_country,
                    pincode : token.card.address_zip
                },
                transactionId : payment.source.id
            })
            neworder.save()
            res.send("Order placed successfully")
        }
        else{
            res.send('Payment Failed')
        }
    } catch (error) {
        return res.status(400).json({message: 'Something went wrong' . error})
    }
});

router.get('/getuserorders',async (req, res)=>{
    const {userid} = req.body
    try {
        const orders = await order.find({userid : userid})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({message : "Something went wrong"})
    }
})

module.exports = router