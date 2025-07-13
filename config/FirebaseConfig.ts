// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBlPyVjm6cyCyCmrQsvekDp-YslOgEV8t0",
//   authDomain: "ai-travel-planner-81179.firebaseapp.com",
//   projectId: "ai-travel-planner-81179",
//   storageBucket: "ai-travel-planner-81179.firebasestorage.app",
//   messagingSenderId: "898179406207",
//   appId: "1:898179406207:web:0bf086ba999f6fcf59e24a",
//   measurementId: "G-MEBGC225EE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// export { app, auth };

import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";



const firebaseConfig = {
  apiKey: "AIzaSyBlPyVjm6cyCyCmrQsvekDp-YslOgEV8t0",
  authDomain: "ai-travel-planner-81179.firebaseapp.com",
  projectId: "ai-travel-planner-81179",
  storageBucket: "ai-travel-planner-81179.firebasestorage.app",
  messagingSenderId: "898179406207",
  appId: "1:898179406207:web:0bf086ba999f6fcf59e24a",
  measurementId: "G-MEBGC225EE"
};

const app = initializeApp(firebaseConfig);

// ✅ Correctly initialize auth for React Native (Expo)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, app };