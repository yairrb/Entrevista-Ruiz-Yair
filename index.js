const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://'+config.env.dev.databaseUri+'/'+config.env.dev.dbName,  
{ useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log("DataBase Connection Success");
    //creacion del servidor
    app.listen(config.env.dev.port, () => {
        console.log("Server started at localhost:3700")
    })
} )
.catch( err => console.log(err));



