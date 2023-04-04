const express = require("express");
const bodyparser = require("body-parser");
var mongoose = require("mongoose");

const admin_route = require("./routes/admin");
const app = express();
const port = process.env.PORT || 4202;
mongoose.connect('mongodb+srv://akarnis:Slenderman.500@huellasmongo.mx5zfrb.mongodb.net/?retryWrites=true&w=majority')
    .then((res) => {
        console.log('Servidor corriendo');
        app.listen(port, function(){
            console.log("Servidor corriendo en el puerto" + port);
        });
    })
    .catch((err) => {
        console.log(err);
    })


    app.use(bodyparser.urlencoded({limit: '50mb',extended:true}));
    app.use(bodyparser.json({limit: '50mb', extended: true}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use("/api", admin_route);

module.exports = app;