
import { initializeApp } from 'firebase/app'
import { myContext } from './Context';
import { useContext } from 'react';
import { getAuth } from 'firebase/auth'
import { useEffect } from 'react';


const firebaseConfig = {
    apiKey: "AIzaSyCqSaV1bs0bcz_Xv5aYElCQo82x5eGX1HQ",
    authDomain: "my-first-firebase-projec-82a5d.firebaseapp.com",
    projectId: "my-first-firebase-projec-82a5d",
    storageBucket: "my-first-firebase-projec-82a5d.appspot.com",
    messagingSenderId: "927476580212",
    appId: "1:927476580212:web:8e59c27596c84a3f987621",
    measurementId: "G-ERY4M7PPSP"
  };
  initializeApp(firebaseConfig);

 


export  const auth =getAuth();

