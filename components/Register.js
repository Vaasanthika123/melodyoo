import React from 'react'


export default function Register() {
  return (
    <div className='Register'>
    <span className="RegisterTitle">Register</span>
      <form className="RegisterForm">
        <label>FirstName</label>
        <input className="RegisterInput" type="text" placeholder="Enter your Name" />
        <label>Contact Number</label>
        <input className="RegisterInput" type="text" placeholder="Enter your Number" />
         <label>Email Id</label>
         <input className="RegisterInput" type="text" placeholder="Enter your Email Id" />
         <label>Password</label>
         <input className="RegisterInput" type="text" placeholder="Password" />
         <label>Confirm Password</label>
         <input className="RegisterInput" type="text" placeholder=" Password" />
</form>
      <br></br>
      <div className='RegisterButton'>
      <button >Register</button>
      </div>
    </div>
  )
}
