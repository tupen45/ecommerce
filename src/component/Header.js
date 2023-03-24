

 import { Container } from 'react-bootstrap';
import Banner from './bannner/Banner';
import Constr1 from './container/Container';
import './Header.css'
import Header1 from './Header/Header1';

const Header=({handleclick,user})=>{
    
    return(
    <div>
        
        <Header1 user={user}/>
        <Banner/>
        <Constr1 handleclick={handleclick}/>
        
        
        
      
      
    </div>
    );
}
export default Header;