import firebase from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAonLuU6V9FbysuMvyRQLXwUsS_ZUpv87Q",
    authDomain: "wiskipix-app.firebaseapp.com",
    databaseURL: "https://wiskipix-app.firebaseio.com",
    projectId: "wiskipix-app",
    storageBucket: "wiskipix-app.appspot.com",
    messagingSenderId: "634191796838",
    appId: "1:634191796838:web:6bf2127dc8d7d1993ceba7"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);