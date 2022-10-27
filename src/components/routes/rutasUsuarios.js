const router = require('express').Router()

const {
getUsuario,
postUsuario,
putUsuario,
deleteUsuario,
getUsuarioId,
deleteUsuarioTarea,
getUsuarios





}=require("../controllers/controladoUsuarioo")
const esAdmin = require('../middlewares/admin')
const validarJWT = require('../middlewares/validar-jwt')
const validarCampos=require("../middlewares/validaciones")



router.get("/usuario",getUsuario)
router.post("/usuario",postUsuario)
router.post("/usuario",[validarCampos],postUsuario)
router.get("/usuario",[validarJWT,esAdmin],getUsuarios)
router.get("/usuario/:idUsuario",getUsuarioId)
router.post("/usuario",[validarJWT,validarCampos],postUsuario)
router.put("/usuario/:idUsuario",[validarJWT,validarCampos],putUsuario)
router.delete("/usuario/:idUsuario",[validarJWT],deleteUsuarioTarea)
// router.delete("/usuario/:idUsuario",[validarJWT],deleteUsuario)


module.exports=router