import React,{useState} from 'react'
import styled from 'styled-components'
import './Login.css';

const Button = styled.button`

     width:30%;
    height:3em;
    background: transparent;
    color:#BF4F74;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .25em;
    border:2px solid #BF4F74;
    transition: 0.5s;
    margin:0 1em;
    padding:0.25em 1em;
    cursor: pointer;
    margin-bottom:10px;

`

const Login = () => {
    const[popupStyle,showPopup]=useState("hide");
    const popup=()=>{
        showPopup("Login-popup")
        setTimeout=(()=>showPopup("hide"),3000)
}


  return (
    <div className="container">
    <div className="title">Login</div>
    <input type="text" placeholder="username"/>
    <input type="password" placeholder="password"/>
    <Button className='login-btn' onClick={popup}>LOGIN</Button>
    {/* <p className='text'>Or Login Using</p>
    <div className='atl-login'>
    <div className='facebook'> */}
        
    {/* </div>
    <div className='google'>google</div> */}
    {/* </div> */}
    <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Incorrect username/password</p>
    </div>
    </div>
  )
}

export default Login