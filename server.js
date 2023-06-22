const express = require('express');
const db = require('./server/db')
const menuRoutes = require('./API/Menu/menu')
const Pizza = require('./server/models/pizzaModel')
const path = require("path")
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")))

const pizzasRoute = require('./server/routes/pizzaRaoutes')
const userRoute = require('./server/routes/userRoutes')
const orderRoute = require('./server/routes/orderRoutes')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', orderRoute)
app.use(cors());


app.get("/", (req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true")
;    res.send("server is working " + port);
});



app.use('/menu', menuRoutes)
const port = process.env.PORT || 8000;
app.listen(port, ()=> 'server running on port')
