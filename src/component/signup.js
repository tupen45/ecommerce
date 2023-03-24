import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";











function  Signup(props){
 
    




// const handleChange=(e)=>{
//   const{id,value}=e.target;
//   if(id==='name'){
//     setName(value);
//   }
// };



 
 
  
  const  [currentTime, setcurrentTime]=useState(new Date());
   
 useEffect(()=>{

    setInterval(() => {
      setcurrentTime(new Date());
    }, 1000);
   
   
  },[]


 );
 

 

 

// const handleSubmit = (event) => {

//   console.log(firstName);
 


//   fetch('http://localhost:3000/store-data',{
//       method: 'POST',
//       // We convert the React state to JSON and send it as the POST body
//       body: JSON.stringify(firstName)
//     }).then(function(response) {
//       console.log(response)   
//       return response.json();
//     });

//   event.preventDefault();
// };

 



 
   
 
 return (
  
    
    <div>
      
      {/* <img src={} alt="whatsapp-icon" className="whatsapp-icon"/> */}
    {/* // <div className="container2">
    //   <div className="container3">
    
    // <input type ="text" placeholder="text" className="input-taq"/><br/>
    // <input type="text" placeholder ="password" className="input-taq"/><br></br>
    // <input type="text" placeholder="name" className="input-taq"/><br/>
    // <input type="button" value="submit" className="input-taq1"/><br/>
    
    // </div> */}
    <p>{currentTime.toString()}</p>
    {/* this is post component */}
    {/* <Post/> */}
    <div className="container7">
      <div>
      {/* <img src={} className="image_con" alt="img"/> */}
      <div className="navbar-blog">
        <ol>
         <Link to={"/Post"} > <li>home</li></Link>
          <li>Blog</li>
          <li>Reviews</li>
          <li>about</li>
        </ol>
      </div>
      
      


      </div>
      <div className="blog-phone">
        <ol>
          <li>
            tupenshl@gmail.com
          </li>
          <li>
            91 7679426794
          </li>                                               
        </ol>
      </div>
    </div>
    {/* <img src={imgbg} width="100%"/> */}
    <section>
    <div className="container-8">
      <div className="container-8-left">
        <div className="border-widht"><h4>Frist coloum</h4></div>
      </div>
      <div className="container-8-right">
      <div className="border-widht"><h4>Frist coloum</h4></div>
      <div className="blog-content">
       

        <h5>Creative science</h5> 
        <h5>Creative science</h5> 
      
        
        

      </div>

      
      </div>

      </div>
      
  
    </section>
    {/* <img src={bg1}/> */}
   

   
    {/* <ReviewForm/>  */}

    
    
    

    
    </div>
     
  );
}
export default Signup;