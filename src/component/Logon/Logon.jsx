import { useState } from "react"
//import React from 'react'
//import {users} from '../../User'
import './style.css'
const Logon = () => {
    const [flat,setflat]=useState(true);
    let name1='';
    let pass1='';
    let email='';
    const handlecheck=()=>{
      const checkname=users.find((el)=> el.email==email)
      const checkpass=users.find((el)=> el.password==pass1)
      if(checkpass && checkname){
        localStorage.setItem('Username',email);
        localStorage.setItem('Pass',pass1);
        const user=users.filter((el)=>el.email==email)
        email=='minhdaimk111@gmail.com'?window.location.href=window.location.href+'Admin/'+user[0].username:window.location.href=window.location.href+'User/'+user[0].username
        
      }
      else{
        alert('Your Account does not exist')
      }
    }
    const handleadd=()=>{
      const checkname=users.find((el)=> el.username==name1)
      if(checkname)
      {
        alert('You have already Account')
      }
      else{
        const newUser={name1,pass1,email}
        console.log(newUser)
        users.push(newUser);
        alert('You have already Created Account')
        localStorage.setItem('Username',name1);
        localStorage.setItem('Pass',pass1);
      }
    }
    
  return (
    <div className='logon'>
      <div className='card login' style={{zIndex:`${flat?-1:2}`}}>
        <h1>LoGin YoU AccOunt</h1>
       <div className='input'>
            <input type='email' placeholder='Email' onChange={(e)=>{email=e.target.value}}></input>
            <input type='password' placeholder='PassWord' onChange={(e)=>{ pass1=e.target.value}}></input>
       </div>
       <div className='button'>
        <button onClick={handlecheck}>Login</button>
        <button onClick={()=>{
            setflat(!flat)
        }}>CreateAccout</button>
       </div>
        
      </div>
      <div className='card create' style={{zIndex:`${flat?2:-1}`}}>
        <h1>CreAte YoU AccOunt</h1>
        <img src='https://img.freepik.com/premium-vector/rocket-launch-flat-style-cartoon-illustration_400474-46.jpg'  style={{zIndex:`${flat?2:10}`}}/>
        <div className='input'>
            <input type='email' placeholder='Email'  onChange={(e)=>{email=e.target.value}}></input>
            <input type='password' placeholder='PassWord'  onChange={(e)=>{ pass1=e.target.value}}></input>
            <input type='text' placeholder='Your Name' onChange={(e)=>{name1=e.target.value}}></input>
        </div>
        <div className='button'>
            <button onClick={handleadd}>CreateAccout</button>
            <button onClick={()=>{
            setflat(!flat)
        }}>Login</button>
        </div>
        
      </div>
    </div>
  )
}

export default Logon
