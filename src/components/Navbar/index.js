import React from 'react'
 import "./navbar.scss"  
 import myLogo from '../Navbar/codewizard logo.svg'
 


const Navbar = () => {
  return (
   
    <div className="navbar"> 
    <div className="title">
        <img src={myLogo} alt='logo'></img>
        <h2>CodeWizard</h2>
    </div>
    <div className="input">
     <ul>
        <button>Sign Up</button>
        <button>Login</button>   
     </ul>
    </div>
    
  </div>  

  )
}

export default Navbar
