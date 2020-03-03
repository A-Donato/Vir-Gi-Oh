var db = require("./firebase/fire")
var User = require('./user.js');
var Card = require('./card.js');

class Main {

  //Loggea al usuario, simplemente asignando una variable global al usuario loggeado jeje
  async logIn(userId){
    try{
      const dbUser = await db.collection("usuarios").doc(userId).get()
      let loggedInUser = new User (dbUser.id, dbUser.data().capital, dbUser.data().salary, '', '', '');//dbUser.data().contracts, dbUser.data().medals, dbUser.data().estadisticas);
      console.log(loggedInUser)
      return loggedInUser;
    }
    catch (error) {
      console.log("Error: ", error)
    }
  }

}

module.exports = new Main();
