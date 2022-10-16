const router = require('express').Router()

const {
getUsuario,
postUsuario,
putUsuario,
deleteUsuario,
getUsuarioId,
deleteUsuarioTarea





}=require("../controllers/controladoUsuarioo")
const esAdmin = require('../middlewares/admin')
const validarJWT = require('../middlewares/validar-jwt')
const validarCampos=require("../middlewares/validaciones")



// router.get("/usuario",getUsuario)
router.post("/usuario",[validarCampos],postUsuario)
router.get("/usuario",[validarJWT],getUsuario)
router.get("/usuario/:idUsuario",getUsuarioId)
router.post("/usuario",[validarJWT],postUsuario)
router.put("/usuario/:idUsuario",[validarJWT],putUsuario)
router.delete("/usuario",[],deleteUsuarioTarea)
router.delete("/usuario",[],deleteUsuario)


module.exports=router