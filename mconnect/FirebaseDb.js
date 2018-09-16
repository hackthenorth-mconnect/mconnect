import firebase from 'react-native-firebase';


export default class FirebaseDb {
  
    constructor() {
    this._config = {
      apiKey: "AIzaSyDAiVU9ZlnkuLpd6CAy3XJNGPgcVWlKQIM",
      authDomain: "mconnect-7012c.firebaseapp.com",
      databaseURL: "https://mconnect-7012c.firebaseio.com",
      projectId: "mconnect-7012c",
      storageBucket: "mconnect-7012c.appspot.com",
      messagingSenderId: "82218429715"
    };
    this._db = null;
  }

  initialize() {
    firebase.initializeApp(this._config);  
    this._db = firebase.firestore();
  }

  getAllDocuments(collection) {
    this._db.collection(collection).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    })
  }

  getDocumentByID(collection, reference_id) {
    this._db.collection(collection).ref(reference_id).get()
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

  setPredictorWeight(collection, reference_id, weight_val){
    this._db.collection(collection).ref(reference_id).update({ weight: weight_val});
  }

  resetPredictorWeight(collection, reference_id){
    this._db.collection(collection).ref(reference_id).update({ weight: 1 })
  }


}

