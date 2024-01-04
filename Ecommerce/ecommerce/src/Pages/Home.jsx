import React from 'react'
import Layout from '../Components/Layout'
import { useContext } from 'react'
import myContext from '../context/myContext'

const Home = () => 
{
  const data = useContext(myContext)
  console.log(data)
  return (
    <div>
      <Layout>
        <p>Home</p>
      </Layout>
     
    </div>
  )
}

export default Home
