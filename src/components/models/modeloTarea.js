const {
    Schema,
    model
} = require('mongoose')


const TareSchema = new Schema({

    titulo: {
        type: String,
        min: 8,
        require
    },
    descripcion: {
        type: String,
        min: 10,
        require
    },
    estado: {
        type: String,
        min: 15,
        require
    }

})


module.exports=model('tarea',TareSchema)