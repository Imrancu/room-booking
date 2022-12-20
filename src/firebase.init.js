import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmgMXmt68l_E-SrfAfdUdkcFnlbi1zdzc",
  authDomain: "room-booking-f9bda.firebaseapp.com",
  projectId: "room-booking-f9bda",
  storageBucket: "room-booking-f9bda.appspot.com",
  messagingSenderId: "844460438145",
  appId: "1:844460438145:web:697a740997639c7c955380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;