import React, { useEffect, useState } from 'react'
import './authentication.style.css'
import {SignUp, LogIn} from '../../firebase'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

function Authentication({currentUser}) {

  const [isSignUpPage, setIsSignUpPage] = useState(true)
  const [name, setName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginButtonEnabled, setLoginButtonEnabled] = useState(false)
  const [signUpButtonEnabled, setSignUpButtonEnabled] = useState(false)
  
  useEffect(() => {
      if(name && signupEmail && signupPassword)
      setSignUpButtonEnabled(true)      
      else setSignUpButtonEnabled(false)
   }, [name, signupEmail, signupPassword])
  useEffect(() => {
    if(loginEmail && loginPassword)
    setLoginButtonEnabled(true)
    else setLoginButtonEnabled(false)
     }, [loginEmail, loginPassword])


const SignUpValidation  = ()=>{
  if(name.length!==0 || signupEmail.length!==0 || signupPassword.length!==0){
    SignUp(signupEmail, signupPassword, name)}
    
}
const LoginValidation  = ()=>{
    LogIn(loginEmail, loginPassword)
}

const signupLoginswitch = (value)=>{
  setIsSignUpPage(value)
}

  return (
<div>

   {!currentUser ? <div className="authentication">

      <div className="authetication-form-switch">
        <button className={` ${isSignUpPage ? "signup-form-switch": "signup-form-switch form-switch-invert"}`} onClick={()=> signupLoginswitch(true)}>Signup</button>
        <button className={` ${isSignUpPage ? "login-form-switch form-switch-invert" : "login-form-switch"}`} onClick={()=>signupLoginswitch(false)}>Login</button>
      </div>

  
      
        {isSignUpPage && <form onSubmit={e=>e.preventDefault()} className="signup-form">
        <h2 className="form-title">Sign Up</h2>
          <label className="form-label">Name</label>
          <input className="form-input" type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}  required/>
          <label className="form-label">Email</label>
          <input className="form-input" type="email" placeholder="Enter Your Email" onChange={(e)=>setSignupEmail(e.target.value)}  required/>
          <label className="form-label">Password</label>
          <input className="form-input" type="password" placeholder="Enter Password" onChange={(e)=>setSignupPassword(e.target.value)}  required/>
          {/* {isLoaderVisible && <Loader type="ThreeDots" color="#000" height={80} width={80} timeout={3000} />} */}
          {signUpButtonEnabled && <button className="form-button" onClick={SignUpValidation}>Sign Up</button>}    
        </form>}
      
      
      {!isSignUpPage && <form onSubmit={e=>e.preventDefault()} className="login-form">
      <h2 className="form-title">Login</h2>
          <label className="form-label">Email</label>
          <input className="form-input" type="email" placeholder="Enter Your Email" onChange={(e)=>setLoginEmail(e.target.value)} required/>
          <label className="form-label">Password</label>
          <input className="form-input" type="password" placeholder="Enter Password" onChange={(e)=>setLoginPassword(e.target.value)} required/>
          {/* {isLoaderVisible && <div className="loader-container"><Loader  type="ThreeDots" color="#000" height={80} width={80} timeout={3000}/></div>} */}
          {loginButtonEnabled && <button className="form-button" onClick={LoginValidation}>Login</button>}
        </form>}
      
    </div>
    : <Redirect to='/'></Redirect>}
    </div>
  )
}

const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
})

export default connect(mapStateToProps)(Authentication)
