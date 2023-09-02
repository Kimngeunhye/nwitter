import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"; // 추가된 import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4hiwTyZrd6rt_tRBM_BVIhsO3m1K8olc",
  authDomain: "nwitter-30234.firebaseapp.com",
  projectId: "nwitter-30234",
  storageBucket: "nwitter-30234.appspot.com",
  messagingSenderId: "570707228384",
  appId: "1:570707228384:web:4012057a746bfa0f144285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authService = getAuth(app); // authService 정의 추가

const firebaseInstance = {
    GoogleAuthProvider : new GoogleAuthProvider(),
    GithubAuthProvider : new GithubAuthProvider()
};

export { authService, firebaseInstance };