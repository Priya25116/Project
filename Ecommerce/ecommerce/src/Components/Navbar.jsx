import React, { useState } from 'react'

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
      <p>Header</p>
    </div>
  )
}

export default Navbar
