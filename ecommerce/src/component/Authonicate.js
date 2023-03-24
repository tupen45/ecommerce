import axios, {isCancel, AxiosError} from 'axios';
import { useEffect, useState } from 'react';
const Auth=()=>{
    const [name ,getName]=useState([]);
    
   console.log(name);
    
    useEffect(()=>{
        axios.get('http://localhost:3000/getdata').then(function(response){
        
        const data1=response.data;
        
        getName(data1);
   });

    },[])
    const id =name.map((id)=><p>{id.id}</p>)
   
    
  
    
    return(<div>
        hello world
        <p>{id}</p>
        
        {name.map((e)=>
                    <h1>{e.name}</h1>
        )
    }
        </div>
        );
};
export default Auth;