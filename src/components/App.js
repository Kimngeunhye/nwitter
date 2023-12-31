import React, {useState} from "react";
import AppRouter from "components/Router";
import {authService} from "../firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} nwitter</footer>
    </>
  )
}

export default App;