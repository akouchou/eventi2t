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
 
    //ajouter un partenaire

    createPartner =() => this.db.collection('partenaire')
<<<<<<< HEAD
    sendPhoto =(image) => this.dbst.ref().child(`images_partenaire/${image.name}`) 
=======

    selectEvent = () => this.db.collection('evenements')

    deleteEvent = (id) => this.db.collection('evenements').doc(id).delete();
>>>>>>> afb737a5588d0f28abbec95f82b56c948a519f90
        

0

}

export default Firebase