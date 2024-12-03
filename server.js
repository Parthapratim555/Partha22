const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT =5000;

app.use(express.json());
app.use(cors());


mongoose
.connect(
    "mongodb+srv://p934879:admin@cluster0.x7vvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{}
   
)
.then(()=> {
    console.log("Connected to the database");
});
 
//Routes
 const userRoute=require("./router/user.route");
 const todoRoute=require("./router/todo.route")
app.use("/user",userRoute);
app.use("/todo",todoRoute);

app.get("/",(req,res)=>{
    res.send("Hello word");
    res.end();
});
app.listen(PORT,()=>{
    console.log(`Server is running in port http://localhost:${PORT}`);

});













