const admin = require('firebase-admin');
//const firestoreConfig = require('firestore-config.json')
var config = {
    apiKey: "AIzaSyDAiVU9ZlnkuLpd6CAy3XJNGPgcVWlKQIM",
    authDomain: "mconnect-7012c.firebaseapp.com",
    databaseURL: "https://mconnect-7012c.firebaseio.com",
    projectId: "mconnect-7012c",
    storageBucket: "mconnect-7012c.appspot.com",
    messagingSenderId: "82218429715"
};
admin.initializeApp(config);  

var db = admin.firestore();
const settings = { timestampsInSnapshots: true};
db.settings(settings);



var p = db.collection('resources');

function getAllDocuments(p) {
    var d = p.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
}
//getAllDocuments(p);

var ref = p.doc("2Hq5S8eTNNGXMLUybAa2");

function getDocumentByID(reference_id) {
    var ref = reference_id
    var getDoc = ref.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
}
getDocumentByID(ref);
