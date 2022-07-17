import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingBar = () => {
  return (
    <>
            <div className="col-xs-12 col-sm-6 col-md-4 my-4">
    <div class="card h-100 text-center p-4" id='mydetailes' >
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
    </>
  )
}

export default LoadingBar
