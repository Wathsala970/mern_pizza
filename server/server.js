const express = require('express');
// const mongoose = require('mongoose');
// const config = require('config');

const app = express();
app.use(express.json());
// const db = config.get('mongoURI');

// mongoose.connect(db)
// .then(()=> console.log("mogoDB connected"))
// .catch(err=> console.error(err));

app.get("/", (req,res)=>{
    res.send("server is working " + port);
});
const port = process.env.PORT || 3000;
app.listen(port, ()=> 'server runnin on port')