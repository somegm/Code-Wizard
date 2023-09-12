import React, { useEffect, useState } from 'react'
 import "./navbar.scss"  
 import MyLogo from './logo-app.svg'
 import accountWhite from '../../images/customize/account-blue.svg'
 import settingsWhite from '../../images/customize/settings-blue.svg'


 


function Navbar  ()  {

  const [guest, setGuest] = useState(true);
  console.log(guest)

  

  return (
   
    <div className="navbar"> 

      <div className="title">
         <img src={MyLogo}></img>
      </div>
      <div className="input"   onClick={() =>{
      setGuest(false);
    } }>

     {guest ? 
        <ul    onClick={() =>{
      setGuest(false);
    } }>
            <button className='sign-up'>Sign Up</button>
            <button>Login</button>   
        </ul>

        :

        <ul    onClick={() =>{
      setGuest(false);
    } }>
            <li>
                <img src={accountWhite} />
                <a href="">Dashboard</a>
                
            </li>
            <li>
                <img src={settingsWhite} />
                <a href="">Settings</a>
            </li>
        
            
         </ul>
    }
        



      
      </div>
    
  </div>  

  )
}

export default Navbar
