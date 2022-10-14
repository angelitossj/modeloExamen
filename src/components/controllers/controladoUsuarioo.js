const Usuario = require("../models/modeloUsuarios")
const bcrypt = require('bcrypt')
const Model=require("../models/modeloTarea")

const CtrlUsuario = {}


CtrlUsuario.getUsuario = async (req, res) => {
    try {
        
        const user = await Usuario.find(({
            isActive: true
        }))
    
        return res.json({
            message: "Usuario encontrado",
            user
    
        })
    
    } catch (error) {
        return res.json({
            message:"error"
        })
    }


}

CtrlUsuario.getUsuarioId = async (req, res) => {
    try {
        const idUser = req.params.idUsuario
        const user = await Usuario.findOne({
            $and: [{
                _id: idUser
            }, {
                isActive: true
            }]
        })
        if (user) {
            return res.json({
                message: 'Usuario',
                user
            })
        }


    } catch (error) {
        return res.status(404).json({
            message: "",
            error
        })
    }


}


CtrlUsuario.postUsuario = async (req, res) => {
    try {
        const {
            nombre,
            usuario,
            password,
            email
        } = req.body
        const newPassword = bcrypt.hashSync(password, 10)

        const newUsuario = new Usuario({
            nombre,
            usuario,
            email,
            password: newPassword
        })

        const user = await newUsuario.save()

        return res.status(201).json({
            message: "Usuario guardado correctamente",
            user

        })

    } catch (error) {
        return res.status(401).json({
            message: "El usuario no se ha podido crear",
            error:error.message
        })
    }



}
CtrlUsuario.putUsuario = async (req, res) => {
    try {
        const id = req.params.idUsuario

        const {
            nombre,
            usuario,
            correo,
            password
        } = req.body
        if (!id || password || correo || nombre || usuario) {
            return res.status(400).json({
                message: "no viene id o informacion"
            })
        }

    } catch (error) {
        return res.status(401).json({
            message: "",
            error
        })
    }



}
CtrlUsuario.deleteUsuario = async (req, res) => {
    const id = req.params.id
    try {
        const user = await Usuario.findByIdAndUpdate(id, {
            isActive: false
        })
        return res.json({
            message: "Tarea oculta",
            tareaD
        })

    } catch (error) {

    }
    const tarea = await Tarea.find()

    return res.json({
        message: "tarea eliminada",
        tarea

    })



}



CtrlUser.deleteUsuarioTarea = async (req, res) => {
    try {
        const idUser = req.params.idUser;
        const user = await Usuario.findOne({$and:[{_id: idUser},{isActive: true}]});
        if(!user){
            return res.json({
                message: `El usuario ya no existe`
            })
        }
       
        await Model.updateMany({$and:[{isActive: true},{idUser}]}, {isActive: false})
     
        await user.updateOne({isActive: false})
        return res.json({
            message: `Usuario eliminado correctamente.`,
        })
    } catch (error) {
        return res.json({message:`Error interno del servidor: ${error.message}`})
    }
}








module.exports = CtrlUsuario