// middlewarae concept

const express = require('express')
const app = express()

function  agecheckmiddleware(req, res, next) {
    const age = req.query.age;
    if(age>=14){
        next();
    }else{
        res.send("your under age no-entry");
    }
}

app.use(agecheckmiddleware);
app.get('/ride1', function(req, res) {
    res.send("you are welcome to the ride1")
})
app.get('/ride2', function(req, res) {
    res.send("your are welcome to the ride2")
})

app.listen(3000);
