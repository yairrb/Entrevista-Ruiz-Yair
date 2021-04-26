'use strict'

const Card = require('../model/card');

const cardService = {

    findByUserId: function(userId) {

        return Card.find({userId: userId }, (err,card) => {
            if (!card.length) return null;

            if (err){
                console.log(err);
                return null;
            };
            return card;
        } );
    },
    saveCard: function(userId, cardToken,brandType,maskedNumber ) {
        let card = new Card({userId: userId,
             cardToken: cardToken,
             brandType: brandType,
             maskedNumber: maskedNumber
         });

       return this.findByUserId(userId)
       .then(data => {
           if (data.length){
            card.primary = false;
           }else{
            card.primary = true;
           }
           return card.save();
       });
    
    }

}

module.exports = cardService;