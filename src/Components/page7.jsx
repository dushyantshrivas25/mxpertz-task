import React, { useState } from 'react'

const page7 = () => {

    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    

    const SubmitHanlder = (e) => {
        e.preventDeafult()
        console.log(FirstName)
        console.log(LastName)
        console.log(Email)
        setFirstName("")
        setLastName("")
        setEmail("")
    }
    
  return (
    <div className='page7'>
        <div className='page7box1'>
            <h3>Hours of Operation</h3>
            <br/>
            <h6 style={{fontSize:"10px"}} >MON- FRI</h6>
            <h6 style={{fontSize:"10px"}} >10:00 a.m - 1:00 p.m</h6>
            <h6 style={{fontSize:"10px"}} >4:00 p.m - 10:30 p.m</h6>
            <div className='slide_down_line_3'></div>
            <br/>
            <h6 style={{fontSize:"10px"}} >SAT</h6>
            <h6 style={{fontSize:"10px"}} >3:00 p.m - 10:30 p.m</h6>
            <br/>
            <div className='slide_down_line_3'></div>
            <br/>
            <h6 style={{fontSize:"10px"}} >SUN</h6>
            <h6 style={{fontSize:"10px"}} >We are closed</h6>
            <br/>
            <button className='custom_button_2'>MAKE A RESERVATION</button>
        </div>
        <div className='page7box2'>
            <h6>DROP US A LINE </h6>
            <h6 style={{fontSize:"10px"}} >DON'T be shy. Let us Know If you have any questions!</h6>
            <button className='custom_button_2'>CONTACT US</button>
            <br/>
            <h6>Our Newsletter</h6>
            <h6 style={{fontSize:"10px"}}>Dialogue is an essential part of any script</h6>
            <form  className='formstyle' method='post' onSubmit={SubmitHanlder}>
                  <input 
                   className="inputStyle"
                   name = 'FirstName'
                   placeholder = "FirstName"
                   value={FirstName}
                   onChange = {(e) => setFirstName(e.target.value)}
                    />
                  <input 
                   name = 'LastName'
                   className="inputStyle"
                   placeholder = "LastName"
                   value={LastName}
                   onChange = {(e) => setLastName(e.target.value)}
                    />                 
                     <input 
                     name = 'Email'
                     className="inputStyle"
                    placeholder = "Email"
                    value={Email}
                    onChange = {(e) => setEmail(e.target.value)}
                     />
                     <button type='submit' className='custom_button_2'>CONTACT US</button>
            </form>
        </div>




    </div>
  )
}

export default page7