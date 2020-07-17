import React, {Component} from "react";
import ReactDOM from "react-dom";
import {AddItem} from "./AddItem";
// import firebase from "firebase";
import * as firebase from "firebase/app"
import 'firebase/firebase-database';
// import firebase from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBfK-sd_jo1kRHzGy0lmCQbEpO_LtKbjhU",
    authDomain: "furniture-freegan.firebaseapp.com",
    databaseURL: "https://furniture-freegan.firebaseio.com",
    projectId: "furniture-freegan",
    storageBucket: "furniture-freegan.appspot.com",
    messagingSenderId: "782067447286",
    appId: "1:782067447286:web:e1ad0ca203aed44ec283d7",
    measurementId: "G-1X7C507TM0"
  };
firebase.initializeApp(firebaseConfig);

const App = () => <AddItem firebase={firebase}/>
ReactDOM.render(<App/>, document.getElementById("app"));