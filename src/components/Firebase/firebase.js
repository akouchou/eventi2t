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
<<<<<<< HEAD
    //inscription utilisateur
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
   
    //connexion utilisateur
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    //creer user
    user = uid => this.db.doc(`admin/${uid}`);

    //deconnexion utilisateur
    signoutUser = () => this.auth.signOut();


    sendImage = (image) => this.dbst.ref().child(`images_evenements/${image.name}`)

    createEvent = () => this.db.collection('evenements')
 

    createPartner =() => this.db.collection('partenaire')

    
    sendPhoto =(image) => this.dbst.ref().child(`images_partenaire/${image.name}`) 

=======
  
>>>>>>> df7c3e70441fc46462b1b94e88b100d6cd98c1fa
    selectEvent = () => this.db.collection('evenements')

    detailEvent = () => this.db.collection('evenements')

    storeReservation = () => this.db.collection('reservations');

    selectPartenaire = id => this.db.collection('partenaire') .where("id_evenement", "==", id)

}

export default Firebase