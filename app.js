var express = require("express");
const req = require("express/lib/request");
var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json());


app.get("/",(req,res)=>{

    res.sendFile(__dirname + '/public/homepage.html')

});


app.get("/home",(req,res)=>{

    res.sendFile(__dirname + '/public/email.html')


});
app.post("/mailer",(req,res)=>{

    res.send("You reached mailer");

});
app.listen(5000,()=>{
    console.log("Server ready at 5000")
});
