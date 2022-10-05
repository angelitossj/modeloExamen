const {Schema,model}=require('mongoose')

const AlumnosSchema = new Schema({

nombre:{
type:String,
min:6,
max:20


},
apellido:{
type:String,
min:9,
max:20
},
pais:{
type:String,
min:9,
max:30
},
email:{
type:String,
min:15,
max:30
},
password:{
type:String,
min:19,
max:50

},
active:{
type:Boolean,
default:true

}







},{versionKey:false,
timestamps:true})


module.exports =model("Alumnos",AlumnosSchema) 