import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const config = {
    apiKey: "AIzaSyBC9GsIlTAeySYpud6NAHEwxOusBr7DNpQ",
    authDomain: "event-app-i2t.firebaseapp.com",
    databaseURL: "https://event-app-i2t.firebaseio.com",
    projectId: "event-app-i2t",
    storageBucket: "event-app-i2t.appspot.com",
    messagingSenderId: "860212476782",
    appId: "1:860212476782:web:b4d408c7a886a7c3bbdf7f",
    measurementId: "G-MYSB44R0DF"
  };

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
        this.dbst = app.storage() 
    }
  
    selectEvent = () => this.db.collection('evenements')

    detailEvent = () => this.db.collection('evenements')

    storeReservation = () => this.db.collection('reservations');

    selectPartenaire = id => this.db.collection('partenaire') .where("id_evenement", "==", id)

    selectIntervenant = id => this.db.collection('intervenants').where("id_evenement", "==", id)

}

export default Firebase