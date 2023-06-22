const express = require('express');


const router = express.Router();

const menu = [
    {
        name : "PEPPER BARBECUE & ONION",
        varients : ["Small","Medium","Large"],
        price : [{"Small": 999,
        "Medium":1849,
        "Large": 3399} ],
        category : "none-veg",
        image : "https://www.dominos.co.in/files/items/Pepper_Barbeque_&_Onion.jpg",
        description: "Pepper Barbecue Chicken I Onion"
    },
    
]

router.get('/', (req,res)=>{
    // console.log(menu);
    res.send(menu)
});

router.post('/', (req,res)=>{
    const pizza = req.body;
    menu.push(pizza);
    res.send('Data added to the database');
});

module.exports = router;