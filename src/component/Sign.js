
    import React, { useEffect, useState } from "react";
import axios from "axios";
import { json, redirect, warning } from "@remix-run/router";
import { useNavigate } from "react-router";
import Cart from "./cart/cart";
const SignIn=({userdatails})=>{
    const [email ,setEame] =useState("");
  
    
    
    const [password, setPassword]= useState("");
   const navigate = useNavigate();


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        
        if(id === "email"){
            setEame(value);
        }
        if(id === "password"){
            setPassword(value);
        }
       

    };
   
    const handleSubmit=()=>{
       
       
        let obj ={
            'username':email,
            'password':password,
        };
       axios.post('http://localhost:3000/login',obj).then((result,res)=>{
      
        if(result.data.Status=== 'invalid'){
            alert('invalid');
           }else{
            alert(result.data.msg);
            // console.log(result.data.user);
            
            
            localStorage.setItem('token', result.data.token)
          
                
                const result1=result.data.user ;
                userdatails(result1);
                    
             navigate('/');
           }
         
       }).catch(function(error){
        console.log(error);
       })
    };
    const handleSubmit1=()=>{
        alert('button clicked')
       
        let obj ={
            username:"raju",
            
        };
       axios.post('http://localhost:3000/shutdown',obj).then((result)=>{
        if(result.data.Status=== 'invalid'){
            alert('invalid')
        }
       }).catch(function(error){
        console.log(error);
       })
    };
   
return(<>
<form >
    <lebel>username</lebel>
    <input type='text ' name="username" placeholder="name" id ="email" onChange={(e)=>handleInputChange(e)} /><br/>
    <lebel>password</lebel>
    <input type='password ' name="password" placeholder="password " id ="password" onChange={(e)=>handleInputChange(e)} /><br/>
    <input type='button' value='register' onClick={()=>{handleSubmit()}} />
   

</form>


</>);
}
export default SignIn;
    
