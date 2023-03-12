const express = require('express');
const mongosee = require('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/user").default;

const app =express();
const port = 9000;

//las rutas se llaman en la aplicacion del servidor es decir el express se manda a llamar 
//middelware
app.use('/api,userRoutes');


//routes

app.get("/",(req,res)=>{

    res.send("Bienvenido API")
}); 

//mongodb conexion
mongosee
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("Conectado a la base de datos"))
    .catch((error)=>console.error(error));


app.listen(port,()=> console.log('Puerto en escucha',port));