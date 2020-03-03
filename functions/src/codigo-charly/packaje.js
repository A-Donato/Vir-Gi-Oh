var initialPackageRarity = [
  {
    rarity: 'N',
    amount: 11
  },
  {
    rarity: 'R',
    amount: 7
  },
  {
    rarity: 'SR',
    amount: 2
  }
]

var initialPackageType = [
  {
    type: 'Trap',
    amount: 4
  },
  {
    type: 'Magic',
    amount: 4
  },
  {
    type: 'Monster',
    amount: 12
  }
]

var availableCards = [];

var db = require("./firebase/fire");
var Card = require('./card.js');

class Package {
  constructor(loggedInUser){
    this.price = 150;
    this.loggedInUser = loggedInUser;
  }

  async buyPack(){
    var selectedCards = [];
    availableCards = [];

    if (this.loggedInUser.getCapital() >= this.price){
      var self = this;
      await this.getAvailableCards(null, null).then(function(){
        for(var j=0; j < 3; j++){
          if(j==2){
            self.removeNormalFromAvailableCards();
          }
          var pickedCard;
          pickedCard = self.pickRandomCard();
          selectedCards.push(pickedCard);
          console.log(pickedCard.getId());
        }
      },
      function(error){
        console.log('REJECTEEEEEED: ' + error);
      });
      console.log("ESTE ES TU PACK")
      console.log(selectedCards);

      this.assignCards(selectedCards, this.loggedInUser);
    }
    else{
      return "No posee saldo suficiente";
    }
  }

  removeNormalFromAvailableCards(){
    for (var i=0; i < availableCards.length; i++){
      console.log(availableCards[i].getRarity());
      if(availableCards[i].getRarity() == 'N'){
        availableCards.splice(i, 1);
        i=i-1;
      }
    }
  }

  async assignCards(selectedCards, loggedInUser){
    //var loggedInUser = Main.getLoggedInUser();
    console.log("LoggedInUser: " + loggedInUser)
    for(var i=0; i < selectedCards.length; i++){
      await this.assignCard(selectedCards[i], loggedInUser);
    }
  }

  async assignCard(card, loggedInUser){
    var contracts = this.getContracts(card);
    await db.collection("cartas").doc(card.getId()).update({
      owner: loggedInUser.getName()
    });
    await db.collection("usuarios").doc(loggedInUser.getName()).collection('cartas').doc(card.getId()).set({
      owner: loggedInUser.getName(),
      contracts: contracts,
      rehired: false
    });
    await db.collection("usuarios").doc(loggedInUser.getName()).update({
      capital: loggedInUser.getCapital() - this.price
    });
    loggedInUser.addCard(card);
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

  validateAndPickInitialCard(){
    var isValid = false;
    var cardPicked;
    while(!isValid){
      cardPicked = this.pickRandomCard();
      var cardRarity = cardPicked.getRarity();
      for(var i = 0; i < initialPackageRarity.length; i++){
        if(initialPackageRarity[i].rarity == cardRarity){
          if(initialPackageRarity[i].amount > 0){
            isValid = true;
            initialPackageRarity[i].amount = initialPackageRarity[i].amount - 1;
          }
        }
      }
    }
    return cardPicked;
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
          var cardsDB = await db.collection("cartas").where("owner", '==', '').where('inPlay', '==', true).get();
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

/*
  async getCardsByRarity(rarity){
    try{
      var cardsDB = await db.collection("cartas").where("rarity", '==', rarity).where("owner", '==', '').get();
      var cards = [];
      cardsDB.forEach(cardDB => {
        console.log(cardDB);
        //let card = new Card ();
        //initialCards.push(card);
      });
      return cards;
    }
    catch (error) {
      console.log("Error: ", error)
    }
  }*/

  /*
  async writeMonsterType(){
    try{
      var cardsDB = await db.collection("cartas").get()
      cardsDB.forEach(cardDB => {
        if(!cardDB.data().type){
          console.log(cardDB.data().name)
          db.collection("cartas").doc(cardDB.id).update({
          type: "Monster"
        });
        }
      });
      return "Se hizo exitosamente!";
    }
    catch (error) {
      console.log("Error: ", error)
    }
  }*/

  async writeOwnerOnEveryCard(){
    try{
      var cardsDB = await db.collection("cartas").where('owner', '==', '').where('rarity', '==', 'R').get()
      cardsDB.forEach(cardDB => {
        console.log(cardDB.id);
        db.collection("cartas").doc(cardDB.id).update({
          inPlay: true
        })
      return "Se hizo exitosamente!";
      });
    }
    catch (error) {
      console.log("Error: ", error)
    }
  }

  async buyInitialPack(loggedInUser){
    var selectedInitialCards = [];
    availableCards = [];

    for(var i = 0; i < initialPackageType.length; i++){
      var self = this;
      await this.getAvailableCards(null, initialPackageType[i].type).then(function(){
        console.log("Holis :D")
        console.log('i: ' + i);
        while(initialPackageType[i].amount > 0){
          var pickedCard;
          pickedCard = self.validateAndPickInitialCard();
          selectedInitialCards.push(pickedCard);
          console.log(pickedCard.getId());
          initialPackageType[i].amount = initialPackageType[i].amount - 1;
        }
      },
      function(error){
        console.log('REJECTEEEEEED: ' + error);
      }
      );
    }
    console.log("ESTE ES TU MAZO")
    console.log(selectedInitialCards);

    //this.assignCards(selectedInitialCards, loggedInUser);
  }

}

module.exports = el_package;
