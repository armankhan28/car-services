// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGj5npKNywIHEa2B_V6ajy8wCTohTiWJ4",
  authDomain: "car-services-8846b.firebaseapp.com",
  projectId: "car-services-8846b",
  storageBucket: "car-services-8846b.appspot.com",
  messagingSenderId: "900104672517",
  appId: "1:900104672517:web:1a62ca846f555d8337936c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;