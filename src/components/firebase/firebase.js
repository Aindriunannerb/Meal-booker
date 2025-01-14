import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};



class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  //firebase auth api implementation

  //create a new user with email and password
  signUpNewUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password).catch(function(error){
    
  });

  //login user with email and password
  loginExistingUserWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);




}

export default Firebase;
