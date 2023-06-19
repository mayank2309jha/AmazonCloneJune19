// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-p5poIxS-L0weWqPP1ZNYeALQHzSH0XI",
  authDomain: "clone-46b56.firebaseapp.com",
  projectId: "clone-46b56",
  storageBucket: "clone-46b56.appspot.com",
  messagingSenderId: "142084766769",
  appId: "1:142084766769:web:329345cf790a2b89636910",
  measurementId: "G-P11NEW644R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Web Client Secret =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
//Web Client ID =142084766769-k32seuic5ll7p2bflb7lbb7nq0c20bd6.apps.googleusercontent.com