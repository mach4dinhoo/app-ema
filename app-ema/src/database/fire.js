import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB_ZSd-zbcGnYF9Qf08lHRAVM5t2wVpiTo",
  authDomain: "app-ema-8ad5a.firebaseapp.com",
  projectId: "app-ema-8ad5a",
  storageBucket: "app-ema-8ad5a.appspot.com",
  messagingSenderId: "55419119656",
  appId: "1:55419119656:web:fb64efcaf1715ae51b2d1d",
  measurementId: "G-TREQYS4Q8Z"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;