const express = require('express');
const db = require('./db')

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("server is working " + port);
});
const port = process.env.PORT || 3000;
app.listen(port, ()=> 'server runnin on port')