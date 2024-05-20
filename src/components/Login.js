import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase"
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    // [Googleでログイン](https://firebase.google.com/docs/auth/web/google-signin?hl=ja)
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("signInWithPopup result", result)
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      });

  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login