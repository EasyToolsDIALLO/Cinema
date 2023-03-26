import React, { useRef, useState } from 'react';
import './SignIn.css';
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = ({ email, setSignIn,setSignUp }) => {
  const emailAuth = useRef(email);
  const passwdAuth = useRef(null);
  const [mail, setMail] = useState(email);
  const [pwd, setPwd] = useState('');

  const register = ()=>{
    setSignUp(true)
    setSignIn(false)
  }

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        //emailAuth.current.value,
        //passwdAuth.current.value
        mail,
        pwd
      );
      console.log(user);
      //dispatch(setLogin(user));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signUp">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailAuth}
          onChange={(e) => setMail(e.target.value)}
          type="email"
          placeholder="enter your email"
          //value={emailAuth.current.value}
          value={mail}
          required
        />
        <input
          ref={passwdAuth}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          placeholder="enter your paswword"
          required
        />
        <button type="submit" className="signIn" onClick={signIn}>
          Sign In
        </button>
        <h4 className="fromUptoIn">
        <span style={{color:"rgba(255, 255, 255, 0.7)",fontWeight:400,fontSize:"13px"}}>Don't have an account yet? </span><span className="ignored" onClick={register}>Register</span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
