const express = require('express');
const db = require('./server/db')
const menuRoutes = require('./API/Menu/menu')
const Pizza = require('./server/models/pizzaModel')

const app = express();
app.use(express.json());

const pizzasRoute = require('./server/routes/pizzaRaoutes')
const userRoute = require('./server/routes/userRoutes')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)

app.get("/", (req,res)=>{
    res.send("server is working " + port);
});



app.use('/menu', menuRoutes)
const port = process.env.PORT || 8000;
app.listen(port, ()=> 'server running on port')