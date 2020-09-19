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
    sendVideo = (video) => this.dbst.ref().child(`video_evenements/${video.name}`)

    createEvent = () => this.db.collection('evenements')
    deleteEvent = (id) => this.db.collection('evenements').doc(id).delete();


    /*Intervenants*/
    createSpeaker = () => this.db.collection('intervenants')
    listIntervenant = (idInt) => this.db.collection('intervenants').where("id_evenement", "==", idInt)
    deleteIntervEvent = (idInt) => this.db.collection('intervenants').where("id_evenement", "==", idInt)
    deleteIntervenant = (id) => this.db.collection('intervenants').doc(id).delete();
    /**Fin */

    /**Partenaire */
    createPartner =() => this.db.collection('partenaire')
    listPartner = (idPart) => this.db.collection('partenaire').where("id_evenement", "==", idPart)
    deletePartnerEvent = (idPart) => this.db.collection('partenaire').where("id_evenement", "==", idPart)
    deletePartner = (id) => this.db.collection('partenaire').doc(id).delete();
    /**Fib */

    /**Reservation */
    listReservation = (idReserv) => this.db.collection('reservations').where("id_evenement", "==", idReserv)
    deleteReservEvent = (idReserv) => this.db.collection('reservations').where("id_evenement", "==", idReserv)
    deleteReservation = (id) => this.db.collection('reservations').doc(id).delete();
    /**Fin */


    sendPhoto = (image) => this.dbst.ref().child(`images_partenaire/${image.name}`) 
    sendPhotoSpeaker = (image) => this.dbst.ref().child(`images_intervenant/${image.name}`) 

    selectEvent = () => this.db.collection('evenements').orderBy('dateCreation')

    

    
    detailEvent = (id) => this.db.collection('evenements').doc(id)
    
    changeStatus = (status) => this.db.collection('evenements').doc(status)

    
    /**Programme */
    createProgramme = () => this.db.collection('programme')
    listProgramme = (id) => this.db.collection('programme').where("id_evenement", "==", id)
    deleteProgrammeEvent = (id) => this.db.collection('programme').where("id_evenement", "==", id)
    deleteProgramme = (id) => this.db.collection('programme').doc(id).delete();
    /**Fin */

}

export default Firebase