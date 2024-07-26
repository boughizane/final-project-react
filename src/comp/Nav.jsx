import React from 'react'
import image from '../logo.png'
import { useNavigate } from 'react-router-dom'

const Nav = ({setsearch,}) => {
  const Navigate=useNavigate()
  return (
    <div>
        <nav>
            <div className='logo'>
           <img src={image}/>
            </div>

            <form action="/search" method="get">
        <input onChange={(e)=>setsearch(e.target.value)} type="text" name="query" placeholder="    Search..."/>
         </form>

         <ul>
            <li id='ul'> About Us</li>
            <li id='ul'>Maintenance</li>
            <li id='ul'>Contact</li>
         </ul>
       
            <button onClick={()=>Navigate('/')} id='bttn'>Sign in</button>
            
          
        
        </nav>
      
    </div>
  )
}

export default Nav
