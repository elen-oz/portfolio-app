import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBra8qSqxlDTwlKi5I0aIepdyYkcPCWuVY',
  authDomain: 'portfolio-app-c7ac7.firebaseapp.com',
  projectId: 'portfolio-app-c7ac7',
  storageBucket: 'portfolio-app-c7ac7.appspot.com',
  messagingSenderId: '832743826529',
  appId: '1:832743826529:web:bb86cbd2155d425ac73620',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

export { projectFirestore, projectStorage };
