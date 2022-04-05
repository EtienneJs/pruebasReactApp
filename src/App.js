import './styles/styles.css'

export const  Calculadora =()=>{
  return(
    <>
    <h1>Calculadora</h1>
    <hr/>

    <div className="container border d-flex align-items-center flex-column w-50 ">

    <div className="row d-flex flex-column w-50">
    <input />
    <input />
    </div>
    <div className="row d-flex w-50 justify-content-center contenedor border">
     <div className='col-3'>
       <div className='row'>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
       </div>
     </div>
     <div className='col-3'>
     <div className='row'>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
       </div>
     </div>
     <div className='col-3'>
     <div className='row'>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
       </div>
     </div>
     <div className='col-3'>
     <div className='row'>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
         <span className='rounded-circle'>7</span>
       </div>
     </div>
    

    </div>

    </div>
    </>
  )
}

