const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

router.post('/register', (req, res)=>{
    const {name, email, password, address, contactno} = req.body
    const newUser = new User({name, email, password ,address, contactno})

    try {
        newUser.save()
        res.send('User Registered Successfully')
    } catch (error) {
        return res.status(400).json({message : error});
    }
});

router.post('/login', async(req,res)=>{
    const {email, password} = req.body

    try {
        const user = await User.find({email, password})

        if(user.length > 0)
        {
            const currentUser = {
                name : user[0].name, 
                email : user[0].email,
                address : user[0].address,
                contactno : user[0].contactno,
                isAdmin : user[0].isAdmin,
                _id : user[0]._id
            }
            res.send(currentUser);
        }
        else{
            return res.status(400).json({message: 'User login failed'});
        }
    } catch (error) {
        return res.status(400).json({message: 'Something went  wrong'});
    }
});
module.exports = router