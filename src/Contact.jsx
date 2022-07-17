import React, { useState } from 'react'

const Contact = () => {
  const[submit,Setsubmit] =useState()
  const finalData=(()=>{
    if(! submit){
      alert("Please fill this form. without filling this form you can't submit this form⚠⚠")

    }
    else{
      alert("The form has been successfully submitted✅✅")
      Setsubmit("")
    }
    


  })
  return (
    <>
    <form class="row g-3 mt-4 container">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label"><strong>Name</strong></label>
    <input type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label"><strong>Email</strong></label>
    <input type="email" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter your address"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label"><strong>State</strong></label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label"><strong>Gender</strong></label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={finalData}>Submit</button>
  </div>
</form>
      
    </>
  )
}

export default Contact
