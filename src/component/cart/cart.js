import userEvent from "@testing-library/user-event";

import { useEffect } from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "../Header/Header1";
import Register from "../register";

const Cart=({cartItems ,user})=>{
    const navigate =useNavigate();
    console.log(user);
    
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/Sign');
        }
       
            
    },[]);
    
    return(
       <>
    
        <Header1/>{
        cartItems.map((item)=>{
            return <>
            {item.id}
            <img src={`http://localhost:3000/image/${item.file_src}`} key={item.id} height='100px' width='100px' />

            </>
        })
       }
       < input type="button" value='cheakout' />
      {
        user.map((item1)=>{
            return<><br></br>{item1.id}<br></br>
            {item1.username}<br></br>
            </>
        })
      }

       </>
    )
}
export default Cart;