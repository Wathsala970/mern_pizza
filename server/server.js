const express = require('express');
const db = require('./db')
// import menuRoutes from '../API/menu'
const menuRoutes = require('../API/menu.js')

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("server is working " + port);
});
app.use('/menu', menuRoutes)
const port = process.env.PORT || 3000;
app.listen(port, ()=> 'server running on port')