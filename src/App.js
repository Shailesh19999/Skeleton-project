import Header from './Header';
import Home from './Home';
import Product from './Product';
import DetailsCard from './DetailsCard';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
<Header/>
   <Routes>
    <Route exact path ="/" element = {<Home/>}/>
    <Route exact path ="/product/:id" element = {<Product/>}/>
    <Route exact path ="/detailscard" element = {<DetailsCard/>}/>
    
  </Routes>
     
    </>

   
  );
}

export default App;
