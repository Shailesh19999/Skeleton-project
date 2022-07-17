
import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <NavLink to= "/"><li className="nav-item nav-link active">Home</li></NavLink>
      <NavLink to= "/contact"><li className="nav-item nav-link active">Contact</li></NavLink>
       
      </ul>

    </div>
  </div>
</nav>
        </>
    )
}

export default Header
