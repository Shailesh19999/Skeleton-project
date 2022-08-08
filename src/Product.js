import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import  { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch } from 'react-redux/es/exports'
import { ADD } from './redux/action/Index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = () => {


 const [product,setProduct]= useState([])
 const [isLoading,setIsLoading]= useState(true)
//  const [cartBtn, setCartBtn] = useState("Add to cart")
 
const dispatch = useDispatch();
 const addProduct = (product)=>{
  toast.success('Card added successfully.', {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  // console.log(product)
  dispatch( ADD(product))
 }
// const handleCart = (product)=>{
//   // console.log(product)
//   if(cartBtn=== "Add to cart"){
//     dispatch(addItem(product))
//     setCartBtn("Remove from cart")
    
//   }
//   else{
//      dispatch(delItem(product))
//     setCartBtn("Add to cart")
//   }


// }

 
   
    
    const getdata =async()=>{
      const response = await fetch (`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json())
    }
    useEffect(()=>{
      setTimeout(() => {
        setIsLoading(false)
        getdata()
     
      }, 2000 );
      
    },[])
    const navigate = useNavigate();
    const goBack=()=>{
      navigate(-1)
  
    }
      const{id}= useParams()
      // console.log(id)

  return (
    
    <>
    
    <h1 className='text-center mt-4'>Product Details</h1>
    <hr />
    
    <SkeletonTheme highlightColor="#e8ffd1">
    {
    isLoading ?
    <div className="container">
        <div className="row">
        
            <div className="col-12">
            <div class="card mt-4 h-100 text-center" id='mydetailes' >
            <Skeleton height={170} width= {140}/>
  
  <div class="card-body"> 
    <h5 class="card-title"> <Skeleton/></h5>
    <p class= "card-text"><strong> <Skeleton/></strong></p>
    <p class= "card-text"> <strong><Skeleton/></strong>
    <h2> <Skeleton/></h2>
    </p>
    <p class="card-text"> <Skeleton/></p>
    <p class="card-text"><strong> <Skeleton/></strong></p>
  </div>
</div>

            </div>
        </div>
    </div> :
       
    <div className="container">
        <div className="row">
        
        
            <div className="col-12">
            <div class="card mt-4 h-100 text-center" id='mydetailes'  >
  <img src={product.image} class="card-img-top" alt="productImage" />
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class= "card-text"><strong>{product.price} ₹</strong></p>
    <p class= "card-text"> <strong>Rating{product.rating && product.rating.rate}</strong>
    <h2><i className='fa fa-star text-success my-2'></i></h2>
    </p>
    <p class="card-text">{product.description}</p>
    <p class="card-text"><strong>{product.category}</strong></p>
    <a href="#" class="btn btn-info mx-2" onClick={()=>addProduct(product)}> Add to cart</a>
    
    <a href="#" class="btn btn-success" onClick={goBack}>Back to home</a>
    
  </div>
</div>

            </div>
        </div>
    </div>
    }
  


    </SkeletonTheme>

  
 
    
    


 

    
  
    
    <ToastContainer /> 
    </>
  )
}

export default Product
