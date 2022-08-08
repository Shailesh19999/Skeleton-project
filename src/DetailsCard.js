import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch} from 'react-redux'
import { DLT } from './redux/action/Index'
import { DECRE,INCRE } from './redux/action/Index'


const DetailsCard = () => {
    
   
    const dispatch = useDispatch()
    const dlt =(id)=>{
        dispatch(DLT(id))
        toast.error('Remove from card', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

    }
    const remove =(item)=>{
        dispatch( DECRE(item))
     
    }
    const incremnt =(item)=>{
        dispatch( INCRE(item))
    }
    const mystate = useSelector((state)=>state.cartReducer.carts)
    // console.log(mystate)
    // decrement cart
   
  return (
    <>
    
    <div className="container-fluid">
        <div className="row">
        {mystate.length ? mystate.map((val)=>{
            
            return (
                <>
                <div className="col-12" key ={val.id}>
            <div class="card mt-4 " style={{width: "100%"}}>
  <div class="card-body d-flex " id='maindiv'>
  <div className="myimg">
  <img src={val.image} class="card-img-top" alt= {val.title} />

  </div>
  <div className="contant">
  <h4 class="card-title">{val.title}</h4>
    <p class="card-text"><strong>{val.price * val.qnty} ₹</strong></p>
    <strong><p className='text-success'>Quantity : {val.qnty}</p></strong>
    <button className='btn btn-dark me-3' onClick={()=>remove(val)}>-</button>
    <button className='btn btn-dark me-3'  onClick={()=>incremnt(val)}>+</button>
   

    <button className='btn btn-danger me-4' onClick={()=>dlt(val.id)}> <i class="fa fa-trash" aria-hidden="true"></i></button>
      

  </div>
  
  </div>
</div>
            </div>

                </>

            )
        }
       
    
    )
    :
              <p1 className="alertpage">Your cart is empty🛒</p1>
    } 

         
        </div>
    </div>

    

    <ToastContainer />
    
    </>
  )
}

export default DetailsCard
