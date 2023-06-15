const express = require('express');
const db = require('./db')
const menuRoutes = require('../API/Menu/menu')
const Pizza = require('../server/models/pizzaModel')

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("server is working " + port);
});

app.get('/getpizzas', async (req,res)=>{
    try {
        const pizzas = await Pizza.find({});
        res.send(pizzas)
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});


app.use('/menu', menuRoutes)
const port = process.env.PORT || 8000;
app.listen(port, ()=> 'server running on port')