import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingBar from './LoadingBar'
import  { SkeletonTheme } from 'react-loading-skeleton'
const Home = () => {
  const [user,setUser]= useState([])
  const [LoadingData,setLoadingData]= useState(true)
  // console.log(user)
 
 const getdata =async()=>{
    const response = await fetch ("https://fakestoreapi.com/products");
    setUser(await response.json())

  }
  useEffect(()=>{
    setTimeout(() => {
    setLoadingData(false)
    getdata()
    }, 2000 );
  },[])
  return (
    <div>
   
      

   <em><h1 className='text-center mt-2 myheading'>My all Products</h1></em>
    <hr />
    <SkeletonTheme highlightColor="#e8ffd1">
      {
        LoadingData ? 
        <div className="container-fluid">
<div className="row">
<LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/><LoadingBar/>
    
</div>
</div> :
<div className="container-fluid">
      <div className="row">
      {
    user.map((value)=>{
      return(
        <>
        <div className="col-xs-12 col-sm-6 col-md-4 my-4">
        <div class="card h-100 text-center p-4" key={value.id} >
  <img src={value.image} class="card-img-top mt-3" alt="myimg"/>
  
  <div class="card-body">
    <h5 class="card-title"><strong>{value.title}</strong></h5>
    <p class= "card-text"><strong>{value.price} ₹</strong></p>

    <NavLink to={`/product/${value.id}`}>
    <button class="btn btn-outline-dark">View Detailes</button></NavLink>
  
    
  </div>
</div>
        </div>
        
        

        </>
      )
    })
  }
      
      </div>
    </div>



      }
    </SkeletonTheme>

  
   
      
    </div>
  )
}

export default Home

