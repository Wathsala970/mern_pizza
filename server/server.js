const express = require('express');
const db = require('./db')
const menuRoutes = require('../API/Menu/menu')
const Pizza = require('./models/pizzaModel')

const app = express();
app.use(express.json());

const pizzasRoute = require('./routes/pizzaRaoutes')
const userRoute = require('./routes/userRoutes')
const orderRoute = require('./routes/orderRoutes')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', orderRoute)


app.get("/", (req,res)=>{
    res.send("server is working " + port);
});



app.use('/menu', menuRoutes)
const port = process.env.PORT || 8000;
app.listen(port, ()=> 'server running on port')