import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC89HAb-i0WB4SjJwBnFft4kLcozKOD3o",
  authDomain: "wizards-life.firebaseapp.com",
  projectId: "wizards-life",
  storageBucket: "wizards-life.appspot.com",
  messagingSenderId: "240498237275",
  appId: "1:240498237275:web:938859ed7053c49478447e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {
    app as default,
    auth,
}