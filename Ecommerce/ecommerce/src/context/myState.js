import React from 'react'
import myContext from './myContext'

const MyState = (props) =>
{
    const state = {
        name : "Hari",
        Phno: 3333
    }
  return (
    <myContext .Provider value={state}>
        {props.children}
    </myContext .Provider>
  )
}

export default MyState
