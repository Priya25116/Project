import React from 'react'
import myContext from './myContext'

const MyState = (props) =>
{
    const state = {
        name : "Hari",
        Phno: 3333
    }
    const toggleMode = () => {
      if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = "rgb(17, 24, 39)"
      }
      else {
          setMode('light');
          document.body.style.backgroundColor = "white"
      }
  }
  return (
    <myContext .Provider value={{
      state, toggleMode
    }}>
        {props.children}
    </myContext.Provider>
  )
}

export default MyState
