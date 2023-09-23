import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyAVxGKK8c5VXKX6hxR4wqI8evQd0nbJwVc",
  authDomain: "backendacdeco.firebaseapp.com",
  projectId: "backendacdeco",
  storageBucket: "backendacdeco.appspot.com",
  messagingSenderId: "192388232215",
  appId: "1:192388232215:web:6e225925ed29d359e79852"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);