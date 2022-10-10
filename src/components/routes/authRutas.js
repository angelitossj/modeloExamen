const router =require('express').Router()

const {iniciarSesion}=require("../controllers/authUsuario")



router.post("/login",iniciarSesion)

router.post("/signin")


module.exports=router;