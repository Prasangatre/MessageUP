import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9CIquoGZ7G6ACrSYL1p0oSCA-j2az0Ds",
  authDomain: "livechat-ec96e.firebaseapp.com",
  projectId: "livechat-ec96e",
  storageBucket: "livechat-ec96e.appspot.com",
  messagingSenderId: "927710244383",
  appId: "1:927710244383:web:6a5c43dc540f5af048af2a"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
