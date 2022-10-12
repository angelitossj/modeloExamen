const router=require('express').Router()
const esAdmin = require('../middlewares/admin')
const validarJWT = require('../middlewares/validar-jwt')


const{
getTarea,
getTareaIdUser,
postTarea,
putTarea,
deleteTarea


}=require('../controllers/controladorTarea')

router.get("/tarea",getTarea)
router.get("/tarea/usuario",[validarJWT],getTareaIdUser)
router.post("/tarea",[validarJWT],postTarea)
router.put("/tarea/:idTarea",[validarJWT],putTarea)
router.delete("/tarea/:idTarea",[validarJWT],deleteTarea)

module.exports=router