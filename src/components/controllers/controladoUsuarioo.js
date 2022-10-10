const Usuario = require("../models/modeloUsuarios")


const CtrolUsuario={}


CtrolUsuario.getUsuario=async(req,res)=>{
    const user=Usuario.find() 

return res.json({
    message:"Usuario encontrado"

})



}
CtrolUsuario.postUsuario=async(req,res)=>{
    const {nombre,apellido,pais,password,email}=req.body

    const newUsuario = new Usuario({nombre,pais,apellido,email,password})
const Usuario=await newUsuario.save()
    return res.json({
        message:"Usuario encontrado"
        
    })
    
    
    
    }
    CtrolUsuario.putUsuario=async(req,res)=>{

        return res.json({
            message:"Usuario encontrado"
            
        })
        
        
        
        }
        CtrolUsuario.deleteUsuario=async(req,res)=>{

            return res.json({
                message:"Usuario encontrado"
                
            })
            
            
            
            }











module.exports= CtrolUsuario