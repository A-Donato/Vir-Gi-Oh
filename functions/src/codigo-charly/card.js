class Card {
  constructor(id, name, rarity, rating, type, owner, contract, rehired){
    this.id = id;
    this.name = name;
    this.rarity = rarity;
    this.rating = rating;
    this.owner = owner;
    this.contract = contract;
    this.rehired = rehired;
    this.type = type;
    this.price = this.setCardPrice(rarity);
  }

  setCardPrice(rarity){
    var price = 0;

    switch(rarity){
      case 'N':
        price = 5;
        break;
      case 'R':
        price = 15;
        break;
      case 'SR':
        price = 30;
        break;
      case 'UR':
        price = 40;
        break;
      default:
        price = 0;
    }
    return price
  }

  getPrice(){
    return this.price;
  }

  getId(){
    return this.id;
  }

  getRarity(){
    return this.rarity;
  }

  getType(){
    return this.type;
  }

}

module.exports = Card;
