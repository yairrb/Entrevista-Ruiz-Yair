'use strict'

const { modelName } = require("../model/card")

const config = {
    env: {
        dev:{
            databaseUri: 'localhost:27017',
            dbName: 'entrevista-tarjetas',
            port: '3700'
        }
    }
    
}


module.exports = config;