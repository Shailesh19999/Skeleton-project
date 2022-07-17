import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Product from './Product';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
<Header/>
   <Routes>
    <Route exact path ="/" element = {<Home/>}/>
    <Route exact path ="/product/:id" element = {<Product/>}/>
    <Route exact path ="/contact" element = {<Contact/>}/>
    
  </Routes>
     
    </>

   
  );
}

export default App;
