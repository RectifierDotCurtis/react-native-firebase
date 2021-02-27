import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA7wroY8jsgkOSuy6X-bvUShOsB-Xp1Yvc',
  authDomain: 'black-list-d22ed.firebaseapp.com',
 // databaseURL: 'https://production-a9404.firebaseio.com',
  projectId: 'black-list-d22ed',
  storageBucket: 'black-list-d22ed.appspot.com',
  messagingSenderId: '499051785976',
  appId: '1:499051785976:ios:f64e3f5d975b0bb3df550d',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
