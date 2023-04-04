const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt-nodejs");

const registro_usuario_admin = async function(req, res){
    let data = req.body;
    let admin_arr = [];
    admin_arr = await Usuario.find({h_codigo: data.h_codigo});
    if(admin_arr.length == 0)
    {
        if(data.password)
        {
            bcrypt.hash(data.password, null, null, async function(err, hash)
            {
                if(hash)
                {
                    data.password = hash;
                    let reg = await Usuario.create({
                        h_codigo: data.h_codigo,
                        nombre: data.nombre,
                        apellidos_p: data.apellidos_p,
                        apellidos_m: data.apellidos_m,
                        password: hash,
                        role: data.role,
                        fecha_creacion: data.fecha_creacion,
                        
                    });
                    res.status(200).send({data:reg});
                }
            })
        }else{
            res.status(200).send({message: 'No hay una contraseña', data: undefined})
        }
    }else{
        res.status(200).send({message: "El codigo del usuario ya existe en la base de datos", data: undefined});
    }
}

module.exports = {
    registro_usuario_admin
}