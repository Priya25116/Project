import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import {Link} from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti"
import logo from '../assets/logo.png'


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
    <div className='flex justify-between items-center bg-black text-white '>
      <div className="image ">
        <img 
            src={logo}
            alt='image'
            className='h h-10 w-50'
        />
      </div>
      <div className='search flex justify-between items-center bg-black text-white'>
        <input type='' name='' id=''/>
        <FaSearch />
      </div>
      <div className='menu'>
        <ul className='flex justify-between items-center gap-5 bg-black text-white'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to= " products/">Products</Link>
          </li>
          <li>
            <Link to ="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className='h-button flex justify-center bg-black text-white'>
          <TiShoppingCart />
          <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
