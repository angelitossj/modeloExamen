const router = require('express').Router()

const {
getUsuario,
postUsuario,
putUsuario,
deleteUsuario




}=require("../controllers/controladoUsuarioo")



router.get("/usuario",getUsuario)

router.post("/usuario",postUsuario)

router.put("/usuario",putUsuario)

router.delete("/usuario",deleteUsuario)


module.exports=router