const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    h_codigo:{
        type: String,
        required: true,
        unique: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    apellidos_p:{
        type: String,
        required: true,
    },
    apellidos_m:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    role:{
        type: String,
        default: 'cliente',
        required: true,
    },
    fecha_creacion:{
        type: Date,
        default: Date.now,
        required: true,
    },
    codigo_h_1:{
        type: String,
        required: false,
        
    },
    codigo_h_2:{
        type: String,
        required: false,
        
    }
});

module.exports = mongoose.model('usuario',UsuarioSchema);