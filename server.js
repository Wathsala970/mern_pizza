const express = require('express');
const db = require('./server/db')
const menuRoutes = require('./API/Menu/menu')
const Pizza = require('./server/models/pizzaModel')
const path = require("path")

const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")))

const pizzasRoute = require('./server/routes/pizzaRaoutes')
const userRoute = require('./server/routes/userRoutes')
const orderRoute = require('./server/routes/orderRoutes')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', orderRoute)


app.get("/", (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", 'true')
    res.send("server is working " + port);
});



app.use('/menu', menuRoutes)
const port = process.env.PORT || 8000;
app.listen(port, ()=> 'server running on port')
