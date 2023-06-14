const express = require('express');


const router = express.Router();

const menu = [
    {
        name : "wathsala",
        age : 24
    }
]

router.get('/', (req,res)=>{
    console.log(menu);
    res.send(menu)
});


module.exports = router;