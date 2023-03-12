import { Router } from "express";
import userSchema from "../models/user";

//objetos constructor
const router = Router();

//crear usuarios crea un usario con el metodo post
router.post("/users", (req, res)=>{

// se crea un usario de tipo schema, lo guarda, si lo guarda responde con los datos pero si hay un error manda el error   
const user = userSchema(req.body);
   user
   .save()
   .then((data) => res.json(data))
   .catch((error)=> res.json({message:error}));
}

);


export default router;