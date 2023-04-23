import React from "react";
import { signInWithGoogle } from "../Firebase/firebase";
import "./SignIn.css";
const SignInWithGoogle = (props) => {
  return (
    <div>
      {props.children}
      <button className="button" onClick={signInWithGoogle}>
        Sign in with google
      </button>
    </div>
  );
};

export default SignInWithGoogle;
