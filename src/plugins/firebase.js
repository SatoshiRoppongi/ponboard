import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
  // ここにfirebaseのapi情報をコピペします。
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ponboard.firebaseapp.com",
  databaseURL: "https://ponboard.firebaseio.com",
  projectId: "ponboard",
  storageBucket: "ponboard.appspot.com",
  messagingSenderId: "361235153112"

});

export const db = firebaseApp.firestore();
