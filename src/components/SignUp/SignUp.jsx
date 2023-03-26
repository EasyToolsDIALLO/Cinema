import React, { useState } from 'react';
import './SignUp.css';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignUp = ({setSignUp,setSignIn}) => {

  const [rg_mail,setEmail] = useState("")
  const [rg_pwd,setPwd] = useState("")
  const [rg_confirm_pwd,setConfirm] = useState("")

  const [match,setMatch] = useState(true)

  const login = ()=>{
    setSignUp(false)
    setSignIn(true)
  }


  const register = async (e) => {
    //e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        //rg_emailAuth.current.value,
        //rg_passwdAuth.current.value
        rg_mail,
        rg_pwd
      );
    } catch (error) {
      console.log(error);
    }
  };

  const verify = () => {
    if (rg_confirm_pwd === rg_pwd){
      register();
      setMatch(true)
      console.log("Mes données",rg_confirm_pwd,rg_mail)
    }
    else {
      alert('confirm with the exact password ');
      setMatch(false)
      setSignUp(true)
    }
    
  };

  return (
    <div className="signUp">
      <form >
        <h1>Register</h1>
        <input
          onChange={(e)=> setEmail(e.target.value)}
          type="email"
          placeholder="enter your email"
          required
        />
        <input
          onChange={(e)=> setPwd(e.target.value)}
          type="password"
          placeholder="enter your paswword"
          required
        />
        

        <input
          onChange={(e)=> setConfirm(e.target.value)}
          type="password"
          placeholder="confirm your paswword"
          required
        />
        {!match && <p style={{color: "red", fontSize: "13px"}}>Enter the same password</p>}

        <button type="submit" className="signIn" onClick={verify}>
          Register
        </button>
        <h4 className="fromUptoIn">
        <span style={{color:"rgba(255, 255, 255, 0.7)",fontWeight:400,fontSize:"13px"}}>Already have an account ? </span><span className="ignored" onClick={login}>Login</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
