import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";


const Login = () => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [{ basket },dispatch] = useStateValue();

  const user = (e) => {
    e.preventDefault();
    if(sessionStorage.getItem('email')==userEmail&&sessionStorage.getItem('password')==userPassword){
      history.push('/');
      dispatch({
        type: "SET_LOGIN",
        user: true,
      });
      sessionStorage.setItem("userAuth",true)
    }
    else{
      alert("Please enter Valid Email or Password");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5 className="login__label">E-mail</h5>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            name=""
            id=""
          />
          <h5 className="login__label">Password</h5>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            name=""
            id=""
          />
          <button type="submit" onClick={user} className="login__signinButton">
            Sign in
          </button>
        </form>
        <p className="login__terms">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="login__signup">
        <p>New to Amazon?</p>
        <Link to="signup">
          <button className="login__signupButton">
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
