
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  const data  = useSelector((state)=> state.cartReducer.carts)
  console.log(data)
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    
     
    <div class="collapse navbar-collapsed" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <NavLink to= "/"><li className="nav-item nav-link active">Home</li></NavLink>
     

    
       
      </ul>
      

    </div>
    <div className="buttons">
      <NavLink to="/DetailsCard" className='btn btn-outline-dark'>
      <i className='fa fa-shopping-cart'></i> Cart ({data.length})
      </NavLink>
      </div>
  </div>
</nav>
        </>
    )
}

export default Header
