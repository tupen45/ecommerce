
import './App.css';


// import Signup from './component/signup'
import { BrowserRouter as BrowserRouter ,Route,Router,Routes } from "react-router-dom";
import Auth from './component/Authonicate';

import Header  from './component/Header';
import Add from './component/admin/Add-data';
import Cart from './component/cart/cart';
import React, { useState } from 'react';
import Register from './component/register';
import SignIn from './component/Sign';



export default function App() {
  const [cartItems,setCartItems]=useState([]);
    const[warning,setWarning]=useState(false);
    const [user,setUSer]=useState([]);
   
    const userdatails=(result1)=>{
      setUSer([...user,result1]);
 };
 console.log(user);

    
  
    

  

  const handleclick=(ef)=>{
     let isPresent=false;
     cartItems.forEach((product)=>{
      if(ef.id===product.id)
        isPresent=true;
      

     })
        if(isPresent){
          setWarning(true);
          setTimeout(()=>{
            setWarning(false);
          },20000);
        return ;  
        }
        
  setCartItems([...cartItems,ef]);
 console.log(cartItems); 

 }
 

  return (
    <React.Fragment>


   
  

   
      <BrowserRouter>
              <Routes>
   

      <Route path='/' element={<Header handleclick={handleclick} user={user} />} />
        <Route exact path='/Auth' element={<Auth />} />
        <Route exact path='/Add' element={<Add />} />
        <Route exact path='/cart' element={<Cart cartItems={cartItems} user={user} />} />
        <Route exact path='/Register' element ={<Register/>}/>
        <Route exact path='/Sign' element ={<SignIn userdatails={userdatails} />}/>
        
      
      
      </Routes>
      </BrowserRouter>

    
    
    
   
  
  
  
   
   
   
   
   
      </React.Fragment>  
  )
  

 }


              