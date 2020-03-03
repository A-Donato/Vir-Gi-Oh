import * as functions from 'firebase-functions';import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from "body-parser";


admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const app = express();
const main = express();
const cors = require('cors');
const contactsCollection = 'contacts';
const cardsCollection = 'cartas';
app.use(cors({ origin: true }));

// const descartasCollection = 'descartas'; // que se yo chabon
// const usersCollection = 'usuarios';


// ------------------------- variables de charly --------------------------
// const user = require('./codigo-charly/user.js');
// const express = require('express');
// const main = require("./codigo-charly/main.js");
// const el_package = require('./codigo-charly/package.js');
// const cards = require('./codigo-chraly/cards.js');
//-------------------------------------------------------------------------

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));// webApi is your functions name, and you will pass main as a parameter
export const webApi = functions.https.onRequest(main);

// ----------------------------------------------------------------------------
// The Functions themself
// ----------------------------------------------------------------------------
// The following ones are examples for CRUD functions (no juampi, no las voy a borrar para que queden de muestra. Si, me chupa un huevo que no tengan nada que ver)
// Add new contact
app.post('/contacts', async (req, res) => {
  try {
    const contact: any = {
      firstName: req.body['firstName'],
      lastName: req.body['lastName'],
      email: req.body['email']
    };
    const newDoc = await firebaseHelper.firestore.createNewDocument(db, contactsCollection, contact);
    res.status(201).send(`Created a new contact: ${newDoc.id}`);
  } catch (error) {
      res.status(400).send(`Contact should only contains firstName, lastName and email!!!`)
  }
})

// Update new contact
app.patch('/contacts/:contactId', async (req, res) => {
  const updatedDoc = await firebaseHelper.firestore.updateDocument(db, contactsCollection, req.params.contactId, req.body);
  res.status(204).send(`Update a new contact: ${updatedDoc}`);
})

// View a contact
app.get('/contacts/:contactId', (req, res) => {
  firebaseHelper.firestore
      .getDocument(db, contactsCollection, req.params.contactId)
      .then(doc => res.status(200).send(doc))
      .catch(error => res.status(400).send(`Cannot get contact: ${error}`));
})

// View all contacts
app.get('/contacts', (req, res) => {
  firebaseHelper.firestore
      .backup(db, contactsCollection)
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(`Cannot get contacts: ${error}`));
})

// Delete a contact
app.delete('/contacts/:contactId', async (req, res) => {
  const deletedContact = await firebaseHelper.firestore
      .deleteDocument(db, contactsCollection, req.params.contactId);
  res.status(204).send(`Contact is deleted: ${deletedContact}`);
})

// ----------------------------------------------------------------------------
// 🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍 THE VIRGI APIS 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
// ----------------------------------------------------------------------------

// Api para obtener una carta por ID
app.get('/cards/:cardId', (req, res) => {
  firebaseHelper.firestore
      .getDocument(db, cardsCollection, req.params.cardId)
      .then(doc => {
        const cardToRetrieve = doc;
        cardToRetrieve.id = Object.keys(doc)[0];
        cardToRetrieve.picture = `https://ygoprodeck.com/pics/${cardToRetrieve.id}.jpg`;
        res.status(200).send(doc);
      })
      .catch(error => res.status(400).send(`Cannot get contact: ${error}`));
})

// Api para comprar una carta
app.post('/packs/buy', async (req, res) => {
  let availableCards: any[] = [];
  try {
    // const user: any = {
    //   docId: req.body['userId'] // ah re que los docs tienen nombre xddd
    // };
    // const userDoc = await firebaseHelper.firestore.getDocument(db, usersCollection, user.docId);
    const queryArray = [['owner', '==', ''], ['inPlay', '==', true]]
    await firebaseHelper.firestore.queryData(db, cardsCollection, queryArray).then(docs => {

      // convierto el objetos de objetos en un array de objetos y les asigno su id y fotito
      availableCards = Object.values(docs);
      Object.keys(docs).forEach((docId , index) => {
        availableCards[index].id = docId;
        availableCards[index].picture = `https://ygoprodeck.com/pics/${docId}.jpg`;
      });

      // selectin 2 randomly
      const random1 = Math.floor(Math.random() * availableCards.length) ;
      const card1Selected = availableCards.splice(random1, 1)[0];
      const random2 = Math.floor(Math.random() * availableCards.length);
      const card2Selected = availableCards.splice(random2, 1)[0];

      // clean de array from Normal cards for the last selection
      const rareCards = availableCards.filter( (card: { rarity: string; }) => card.rarity === 'R' );
      const random3 = Math.floor(Math.random() * rareCards.length);
      const card3Selected = rareCards[random3];

      // Buscamos la rareza mas alta de las 3
      const cardsToSend = [card1Selected, card2Selected, card3Selected];

      const rarityGrades = ['UR', 'SR', 'R', 'N']
      cardsToSend.sort( (cardA, cardB) => {
        return rarityGrades.indexOf(cardB.rarity) - rarityGrades.indexOf(cardA.rarity);
      });


      const dataToRetrieve = {
        message: 'MIRA JUAMPI ANDA',
        cards: cardsToSend,
        bestRarity: cardsToSend[2].rarity
      }
      res.status(201).send(dataToRetrieve);
    });
  } catch (error) {
      res.status(400).send(`algo paso macho xd =>  ${error}`)
  }
})

// Private methods ah reeee
