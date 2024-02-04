const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send("hey");
})

app.listen(port, ()=>{
    console.log(`listing to port ${port}`);
});