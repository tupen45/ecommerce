
import "./Container.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useParams} from "react-router-dom";


const Constr1=({handleclick})=>{
    
      
    const [image ,setImage]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/photo',).then((resonse)=>{
            
            setImage(resonse.data);
         });

    },[])
    
     
    
    

    return(<>
    <div className="container" >
            {
                image.map((ef,i)=>{
                  return  <div>
                     <div className="img-product">
                   
     <Link to='/Cart'><img src={`http://localhost:3000/image/${ef.file_src}`}
      alt="chj"
       height="300px" width='300px'/></Link>  
      <div className="datails"> <p  onClick={()=>handleclick(ef)}>{ef.id}</p>

       <p>100</p>
     
       </div>
       </div>
      
                    
                    </div>
                })
            }
    </div>
    </>)
}
export default Constr1;     