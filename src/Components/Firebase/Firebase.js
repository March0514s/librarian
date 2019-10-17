import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { config } from './Config';

class Firebase{
    constructor(){
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
        this.storage = firebase.storage();
    }

    //LOGIN
    async login(email, password){
        const user = await firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            console.log(err);
            return err;
        });
        return user;
    }

    //SIGNIN
    async signin(email, password){
        const user = await firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            console.log(err);
            return err;
        });
        return user;
    }
    //LOGOUT
    async logout(){
        const logout = await firebase.auth()
        .signOut().catch(err => {
            console.log(err);
            return err;
        });
        return logout;
    }

    //USER STATE
    async getUserState(){
        return new Promise( resolve => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    async updateProfilePicture(name){
        let nameFixed = name.replace(/\//g,'%2F');
        let fullURL = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${nameFixed}?alt=media`;
        return this.auth.currentUser.updateProfile({
          photoURL: fullURL
        })
        .then(() => {
          return fullURL;
        });
      }
}

export default new Firebase();