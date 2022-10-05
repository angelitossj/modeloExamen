const router = require('express').Router()

const {
getAlumnos,
postAlumnos,
putAlumnos,
deleteAlumnos




}=require("../controllers/controladoAlumno")



router.get("/alumnos",getAlumnos)

router.post("/alumnos",postAlumnos)

router.put("/alumons",putAlumnos)

router.delete("/alumnos",deleteAlumnos)


module.exports=router