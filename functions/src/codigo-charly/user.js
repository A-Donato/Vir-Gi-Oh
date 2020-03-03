var db = require("./firebase/fire");

class User {
  constructor(name, capital, salary, contracts, medals, statistics){
    this.name = name;
    this.capital = capital;
    this.salary = salary;
    this.contracts = contracts
    this.medals = medals;
    this.statistics = statistics;
    Cards = require('./cards.js');
    this.cards = {};
  }

  getName(){
    return this.name;
  }

  getCapital(){
    return this.capital;
  }

  getSalary(){
    return this.salary;
  }

  //If cards is null, then search for them in the db
  async getCards(){
    var cardsObject = new Cards();
    this.cards = await cardsObject.getCardsByOwner(this.name);
    return this.cards
  }

  addCard(card){
    this.cards.push(card);
  }

  getNormalContracts(){
    return this.contracts.normalContracts;
  }

  getSpecialContracts(){
    return this.contracts.specialContracts;
  }

  getStatistics(){
    return this.statistics;
  }

  getUserFromDatabase(uid){

  }

  buyPack(packType){
    //calcular la cantidad de cartas de cada rating que va a devolver el paquete (para el inicial es fijo)

    //ir a buscarlas a la bd, y tomar varias aleatoriamente
    //escribir en la bd que se obtuvieron esas cartas
  }

  getAmountPerRating(packType){
    return [];
  }

  async setSalary(){
    var cards = new Cards();
    await cards.calculateCardsPrice(this.name).then((salary) => {
      console.log(salary);
      this.salary = salary;
    });
    await db.collection("usuarios").doc(this.name).update({
      salary: this.salary,
    });
    return this.salary;
  }

}

module.exports = User;
