'use strict'

const Card = require('../model/card');
const CardService = require('../service/cardService');

let controller = { 
    getCard: function(req, res){

        let userid = req.query.userId;

        CardService.findByUserId(userid)
        .then( cards =>{
            if (!cards) return res.status(404).send({
                message: "card not found"
            });

            return res.status(200).send({
                messsge: "data retrieved succesfully",
                data: cards
            })

        });
    },
    postCard: function(req, res) {
        let params = req.body;
        CardService.saveCard(params.userId,params.cardToken,params.brandType,params.maskedNumber)
        .then( savedCard => {

            if (!savedCard) return res.status(404).send({message: 'Unable to storage data'});

            return res.status(200).send(
                {message:"card created successfuly"});
        });
    }
}

module.exports = controller;