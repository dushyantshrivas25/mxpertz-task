import React from 'react'

const page3 = () => {
  return (
    <div className='page3'>
           <div style={{display:'flex',flexDirection:"column", justifyContent:"space-between",alignItems:"center",height:"3vmax"}}>
                <h6 style={{letterSpacing:"3px",color:"#c6c2c2"}}>ONLY THE BEST</h6>
                <div className='slide_down_line_2' ></div>
             </div>
             <h1 style={{fontSize:"50px"}}>Fresh Ingredient, Tasty Meals</h1>
             <p style={{color:"#a0a0a0",textAlign:'center',width:"50%",fontSize:"20px"}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, magnam.rper nec. Suspendisse nec tincidunt magna. Mauris dui sem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, excepturi.
             </p>
             <button className='custom_button'>VIEW ITEMS</button>
    </div>
  )
}

export default page3