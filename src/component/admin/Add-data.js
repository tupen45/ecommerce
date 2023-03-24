import { useState } from "react";
import axios from "axios";

const Add=()=>{
    const [file, setFile]=useState("");
    


    const savefile=(e)=>{
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
        
        

    };
    const upload=async(e)=>{
            
            const data=new FormData();
            data.append("file" ,file);
            
            
          
                const res = await axios.post(
                  "http://localhost:3000/upload",data
                  
                ).then((Response)=>{
                  console.log(Response)
                })
                
              
    };

    return(<>
    <input type="file" name="file" onChange={savefile} />
    
    <input type="button" value="submit" onClick={upload}/>
    </>)
}
export default Add;