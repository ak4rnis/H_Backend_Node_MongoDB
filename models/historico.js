const mongoose = require("mongoose");

const HistoricoSchema = new mongoose.Schema({
    id_his:{
        type: String,
        required: true,
        unique: true,
    },
    id_user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: true,
    },
    fecha_creacion: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

module.exports = mongoose.model("historico",HistoricoSchema);