import React from 'react'

const page1 = () => {
  return (
    <div className='page1'>
      
      <h1 style={{color:"white",fontSize:"60px",marginTop:"80px"}}>Only Quality Food</h1>
        <p style={{width:"50%",color:"#fff",textAlign:"center"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>
        <div style={{width:"30%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <button className='btn btn-outline-light w-50'>View Menu</button>
            <button className='btn btn-outline-light w-50 mx-4'>Reservation</button>
        </div>
        <span className='text-light fs-4'><i class="bi bi-arrow-down"></i></span>
    </div>
  )
}

export default page1