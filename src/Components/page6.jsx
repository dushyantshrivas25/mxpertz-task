import React from 'react'

const page6 = () => {
  return (
    <div className='page6'>
         <div style={{display:'flex',flexDirection:"column", justifyContent:"space-between",alignItems:"center",height:"3vmax"}}>
                <h6 style={{letterSpacing:"3px",color:"#c6c2c2"}}>DON'T MISS</h6>
                <div className='slide_down_line_2' ></div>
             </div>
             <h1 style={{fontSize:"50px"}}>Our News & Events</h1>
             <p style={{color:"#a0a0a0",textAlign:'center',width:"50%",fontSize:"20px"}}>
             Nullam vehicula justo tortor, ut sodales lorem ullamcorper nec. Suspendisse nec tincidunt magna. Mauris dui sem,
             </p>
             <div className='page6contentbox'>
             <div className='page6contentboxcontent1'>
                    <img src='https://images.unsplash.com/photo-1573027574784-b5155b000b50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='imagerender'/>
                    <div style={{padding:'20px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <h5>Lorem ipsum dolor</h5>
                    <h6 style={{letterSpacing:"3px",color:"#CC966F"}}>CATEGORY</h6>
                    <br/>
                    <p style={{color:'#c6c2c2'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet nulla rhoncus, posuere dui vitae Duis sit amet nulla rhoncus, posuere dui vitae
                    </p>
                    </div>
                </div>
                <div className='page6contentboxcontent1'>
                    <img src='https://images.unsplash.com/photo-1560322611-a2c5b22b79ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='imagerender'/>
                    <div style={{padding:'20px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <h5>Duis sit amet nulla rhoncus</h5>
                    <h6 style={{letterSpacing:"3px",color:"#CC966F"}}>CATEGORY</h6>
                    <br/>
                    <p style={{color:'#c6c2c2'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet nulla rhoncus, posuere dui vitae
                    </p>
                    </div>
                </div>
                <div className='page6contentboxcontent1'>
                    <img src='https://images.unsplash.com/photo-1511180427842-5878e7a53e2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='imagerender'/>
                    <div style={{padding:'20px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <h5>consectetur adipiscing elit</h5>
                    <h6 style={{letterSpacing:"3px",color:"#CC966F"}}>CATEGORY</h6>
                    <br/>
                    <p style={{color:'#c6c2c2'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet nulla rhoncus, posuere dui vitae
                    </p>
                    </div>
                </div>
             </div>
             <button className='custom_button'>READ MORE</button>



    </div>
  )
}

export default page6