var db = require("./firebase/fire")
var Card = require('./card.js');

var availableCards = [];


var cardsInPlay = [
  {
    rarity: 'N',
    amount: 0//83
  },
  {
    rarity: 'R',
    amount: 0//60
  },
  {
    rarity: 'SR',
    amount: 30
  },
  {
    rarity: 'UR',
    amount: 15
  }
]

var availableCards = [];

var Main = require('./main.js');
var db = require("./firebase/fire");
var Card = require('./Card.js');

class Cards {
  constructor(){

  }

  async getCardsByRarity(rarity){
    try{
      var cardsDB = await db.collection("cartas").where("rarity", '==', rarity).get()//where("owner", '==', '').get();
      var cards = [];
      cardsDB.forEach(cardDB => {
        console.log(cardDB);
        //let card = new Card ();
        //initialCards.push(card);
      })
      return [];
    }
    catch (error) {
      console.log("Error: ", error)
    }
  }

  async setCardsInPlay(){
    var selectedCardsInPlay = [];
    availableCards = [];

    for(var i=0; i < cardsInPlay.length; i++){
      var self = this;
      await this.getAvailableCards(cardsInPlay[i].rarity, null).then(function(){
        console.log("Holis :D");
        console.log(cardsInPlay[i].rarity);
        console.log('i: ' + i);
        while(cardsInPlay[i].amount > 0){
          var pickedCard;
          pickedCard = self.pickRandomCard();
          selectedCardsInPlay.push(pickedCard);
          console.log(pickedCard.getId());
          cardsInPlay[i].amount = cardsInPlay[i].amount - 1;
        }
      },
      function(error){
        console.log('REJECTEEEEEED: ' + error);
      });
    }
    console.log("ESTAS SON LAS CARTAS");
    console.log(selectedCardsInPlay);

    this.assignCardsInPlay(selectedCardsInPlay);
    return "Listo!"
  }

  async assignCardsInPlay(selectedCardsInPlay){
    for(var i=0; i < selectedCardsInPlay.length; i++){
      await this.assignCardInPlay(selectedCardsInPlay[i]);
    }
  }

  async assignCardInPlay(card){
    await db.collection("cartas").doc(card.getId()).update({
      inPlay: true
    });
  }

  getContracts(card){
    var contracts;
    if (card.getRarity() == 'N'){
      contracts = 'none';
    }
    else if (card.getRarity() == 'R'){
      contracts = 5;
    }
    else if (card.getRarity() == 'SR'){
      contracts = 3;
    }
    else if (card.getRarity() == 'UR'){
      contracts = 2;
    }
    return contracts;
  }

  pickRandomCard(){
    const vectorPositionChosen = Math.floor(Math.random() * availableCards.length);
    var cardPicked = availableCards[vectorPositionChosen];
    availableCards.splice(vectorPositionChosen, 1);
    return cardPicked;
  }

  async getAvailableCards (rarity, type){
      try{
        console.log('GET AVAILABLE CARDS')
        availableCards = [];
        var cardsDB;
        if (rarity && type){
          cardsDB = await db.collection("cartas").where("rarity", '==', rarity).where("owner", '==', '').where("type", '==', type).get();
        }
        else if (rarity && !type){
          var cardsDB = await db.collection("cartas").where("rarity", '==', rarity).where("owner", '==', '').get();
        }
        else if(!rarity && type){
          var cardsDB = await db.collection("cartas").where("owner", '==', '').where("type", '==', type).get();
        }
        //Trae todas las available cards
        else{
          var cardsDB = await db.collection("cartas").where("owner", '==', '').get();
        }
        cardsDB.forEach(cardDB => {
          let card = new Card (cardDB.id, cardDB.data().name, cardDB.data().rarity, cardDB.data().rating, cardDB.data().type, '', '', ''); //FALTA INICIALIZAR LAS CARTAS
          availableCards.push(card);
        });
        console.log(availableCards.length)
      }
      catch (error) {
        console.log("Error: ", error)
      }
  }

  async getCardsByOwner (userName){
    try{
      var cardsByOwner = [];
      var cardsDB;
      cardsDB = await db.collection("cartas").where("owner", '==', userName).get();

      cardsDB.forEach(cardDB => {
        let card = new Card (cardDB.id, cardDB.data().name, cardDB.data().rarity, cardDB.data().rating, cardDB.data().type, '', '', ''); //FALTA INICIALIZAR LAS CARTAS
        cardsByOwner.push(card);
      });
      return cardsByOwner;
    }
    catch (error) {
      console.log("Error: ", error)
    }
  }

  async calculateCardsPrice(userName){
    var salary = 0;
    var cardsByOwner = await this.getCardsByOwner(userName);
    for(var i=0; i < cardsByOwner.length; i++){
      salary = salary + cardsByOwner[i].getPrice();
    }
    return salary;
  }

}

module.exports = Cards;
