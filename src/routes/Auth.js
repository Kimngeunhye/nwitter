import React, { useState } from "react";
import { authService, firebaseInstance } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // 함수 import 추가
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"; // 추가된 import

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const onChange = (event) => {
        const {target:{name, value}} = event;
        if (name === "email"){
            setEmail(value)
        }else if(name==="password")
        {
            setPassword(value)
        }
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                //create account
                data = await createUserWithEmailAndPassword(authService, email, password); // 수정
            }else{
                //login
                data = await signInWithEmailAndPassword(authService, email, password); // 수정
            }
            console.log(data);
        }catch(error){
            console.log(error);
        }
    };
    const onSocialClick = async (event) => {
        const { target: { name } } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.GithubAuthProvider();
        }
        try {
            const data = await authService.signInWithPopup(authService, provider);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        console.log(firebaseInstance);
    };
    return (
        <div>
        <form onSubmit={onSubmit}>
            <input name = "email" type="eamil" placeholder="Email" required value={email} onChange={onChange}/>
            <input name = "password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
            <input type="submit" value={newAccount ? "Create Account":"Log In"} />
        </form>
        <div>
            <button onClick={onSocialClick} name="google">Continue with Google</button>
            <button onClick={onSocialClick} name="github">Continue with Github</button>
        </div>
    </div>
    );
};


export default Auth;