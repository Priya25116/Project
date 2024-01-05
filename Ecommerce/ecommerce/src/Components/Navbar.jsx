import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import {Link} from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti"


const Navbar = () => 
{
    const [mode, setMode] = useState('light')
    const toogleMode=() =>{
        if(mode === 'light')
        {
            setMode('dark')
            document.body.style.backgroundColor = "black"
        }
        else{
            setMode('dark')
            document.body.style.backgroundColor= "white"
        }
    }
  return (
    <div>
      <div className="image">
        <img />
      </div>
      <div>
        <input type='' name='' id=''/>
        <FaSearch />
      </div>
      <div className='menu'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to= "/products">Products</Link>
          </li>
          <li>
            <Link to ="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="h-button">
          <TiShoppingCart />
          <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
