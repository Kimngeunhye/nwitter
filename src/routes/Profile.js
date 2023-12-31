import { authService } from "firebase";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default () => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
}; 