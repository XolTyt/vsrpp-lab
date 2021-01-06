import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB07rWc8-klDeidnTDiQVEgptwCTsppgrw",
  authDomain: "react-lab-rasinshmek.firebaseapp.com",
  projectId: "react-lab-rasinshmek",
  storageBucket: "react-lab-rasinshmek.appspot.com",
  messagingSenderId: "929580867742",
  appId: "1:929580867742:web:1e144523484dd7fe8e9b8f",
  measurementId: "G-M2V4GG0CZC"
  };
  const fire = firebase.initializeApp(config);
  export default fire;