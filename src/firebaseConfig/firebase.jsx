

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpUt06bG3rre0kRqZNeY-V0IhFdv37mac",
  authDomain: "kbc-store.firebaseapp.com",
  projectId: "kbc-store",
  storageBucket: "kbc-store.appspot.com",
  messagingSenderId: "314945521525",
  appId: "1:314945521525:web:b154ac8cece4ce0721353c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
export const db = getFirestore();

