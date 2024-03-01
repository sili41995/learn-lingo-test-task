import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDu96X6uNLqTebg40LIrRKzBJ5lI2HN2Zo',
  authDomain: 'learn-lingo-app-563b1.firebaseapp.com',
  databaseURL: 'https://learn-lingo-app-563b1-default-rtdb.firebaseio.com',
  projectId: 'learn-lingo-app-563b1',
  storageBucket: 'learn-lingo-app-563b1.appspot.com',
  messagingSenderId: '1047387323139',
  appId: '1:1047387323139:web:edaf93596002ee423e8736',
};

const app = initializeApp(firebaseConfig);

export { firebaseConfig, app };
