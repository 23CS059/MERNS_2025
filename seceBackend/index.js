const express = require('express')
const path = require("path")
const mdb = require('mongoose')
const dotenv = require('dotenv')
const app = express()
dotenv.config()


mdb.connect(process.env.NONGODB_URL).then(()=>{
    console.log("MongoDB Connection Successful");
}).catch((err)=>{
    console.log("MongoDB Connection Unsuccessful");
})
app.get("/",(req,res)=>{
    res.send("Welcome to Backend my frnd \n Fasten ur codebase so u can catchup");
});
app.get('/static',(req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"index.html"));

});
app.post('/signup',(req,res)=>{
    var {firstName,LastName,username,email,password}
    try{
    const newCustomer =  new Signup({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
    })
    console.log("Before newCust")
    console.log(newCustomer),
    res.status(200).send("Value Received")
}catch(err){
    res.status(200).send("Signup Unsuccessful",err)

}
app.listen(3001,()=>{
    console.log("Server Started")
});
