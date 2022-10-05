const Alumno = require("../models/modeloAlumnos")


const CtrlAlumno={}


CtrlAlumno.getAlumnos=async(req,res)=>{
    const estudiante=Alumno.find() 

return res.json({
    message:"Usuario encontrado"

})



}
CtrlAlumno.postAlumnos=async(req,res)=>{
    const {nombre,apellido,pais,password,email}=req.body

    const newAlumno = new Alumno({nombre,pais,apellido,email,password})
const alumno=await newAlumno.save()
    return res.json({
        message:"Usuario encontrado"
        
    })
    
    
    
    }
    CtrlAlumno.putAlumnos=async(req,res)=>{

        return res.json({
            message:"Usuario encontrado"
            
        })
        
        
        
        }
        CtrlAlumno.deleteAlumnos=async(req,res)=>{

            return res.json({
                message:"Usuario encontrado"
                
            })
            
            
            
            }











module.exports= CtrlAlumno