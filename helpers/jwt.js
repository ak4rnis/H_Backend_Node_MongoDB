const jwt = require("jwt-simple");
const moment = require('moment');
const secret = 'drakarnis';

exports.createToken = function(user){
    const payload = {
        sub: user._id,
        h_codigo: user.h_codigo,
        nombre: user.nombre,
        apellido_p: user.apellido_p,
        apellido_m: user.apellido_m,
        fecha_creacion: user.email,
        role: user.role,
        codigo_h_1: user.codigo_h_1,
        codigo_h_2: user.codigo_h_2,
        iat: moment().unix(),
        exp: moment().add(7, 'days').unix()
    }
    return jwt.encode(payload, secret);
}