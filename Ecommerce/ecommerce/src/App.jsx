import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Order from './Pages/Order'
import NoPage from './Pages/NoPage'
import Cart from './Pages/Cart'
import Dashboard from './Pages/Admin/Dashboard'
import myContext from './context/myContext'


const App = () => 
{
  const state = {
    name : "Hari",
    Phno: 3333
 }
  
  return (
    <myContext .Provider value={state}>
      <BrowserRouter>
          <Routes>
            <Route  path='/' element= {<Home />}/>
            <Route path='/order' element ={< Order/>} />
            <Route  path='/cart' element ={<Cart />} />
            <Route  path='/dashboard' element ={<Dashboard />} />
            <Route  path='/*' element ={<NoPage />} />
            <Route />
         </Routes>
      </BrowserRouter>
    </myContext .Provider>
    
  )
}

export default App
