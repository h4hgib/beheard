
import React from 'react';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';

// Configure Firebase.
var config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
  };

// var config = {
//     apiKey: "AIzaSyCF3P8YOYyjK17fghY_jUvhGEZfq8EFGPQ",
//     authDomain: "adventuretime-beheard.firebaseapp.com",
//     databaseURL: "https://adventuretime-beheard.firebaseio.com",
//     projectId: "adventuretime-beheard",
//     storageBucket: "adventuretime-beheard.appspot.com",
//     messagingSenderId: "686718923773"
//   };

firebase.initializeApp(config);

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow (
  // Note that on mobile devices, redirect will be used regardless)
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],

  // Redirect to /LoggedIn after sign in is successful.
  // Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/LoggedIn',
  callbacks: {
      signInSuccess: () => {
        return false; // Avoid redirects after sign-in.
       }
     }
};

//TODO: this doesn't need to be a component, could just be access the observed variables vanilla
class AuthService extends React.Component {

  componentDidMount = () => {

    // Displays the login screen (so that the user sees its loading indicator) if the url has the has #login
    // (this happens when firebase redirects the browser back to to the app to complete the login flow)
    this.props.auth.checkLogin();


    firebase.auth().onAuthStateChanged((user) => {
      console.log("Auth state changed:", user);
      this.props.auth.setCurrentUser(user);
      if (user) {
        this.props.auth.loginHide();
      }
    });


  };

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default inject('auth')(observer(AuthService));
