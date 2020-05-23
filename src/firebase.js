import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwFZqE6XT_TtztMmtbqO-FYjr_SLGE2Ws",
    authDomain: "redux-help-queue-186f3.firebaseapp.com",
    databaseURL: "https://redux-help-queue-186f3.firebaseio.com",
    projectId: "redux-help-queue-186f3",
    storageBucket: "redux-help-queue-186f3.appspot.com",
    messagingSenderId: "85017052649",
    appId: "1:85017052649:web:e9a8f7afee01998914b778"
  }

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;