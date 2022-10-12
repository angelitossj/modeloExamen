const router = require('express').Router()

const {
getUsuario,
postUsuario,
putUsuario,
deleteUsuario,
getUsuarioId





}=require("../controllers/controladoUsuarioo")
const esAdmin = require('../middlewares/admin')
const validarJWT = require('../middlewares/validar-jwt')




router.post("/usuario",postUsuario)
router.get("/usuario",[validarJWT,esAdmin],getUsuario)
router.get("/usuario/:idUsuario",getUsuarioId)
router.post("/usuario",[validarJWT],postUsuario)
router.put("/usuario/:idUsuario",[validarJWT],putUsuario)

router.delete("/usuario",[],deleteUsuario)


module.exports=router