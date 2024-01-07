import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import axios from 'axios'
import { useContext } from 'react'
import myContext from '../context/myContext'

const Home = () => 
{
   const [products, setProducts] = useState([])

   useEffect (() =>
   {
    try{
      axios.get("https://fakestoreapi.com/products")
      .then((res)=>setProducts(res.data))
    }
    catch(err)
    {
      console.log(err)
    }
   },[])
  return (
    <div>
      <Layout>
        <div className=" grid grid-cols-3">
          {products && products.map((prod, index)=>
          (
            <div key={index} className='max-w-sm rounded overflow-hidden shadow-lg p-5 m-3 hover:scale-105 transition-all duration-200 flex flex-col justify-center items-center gap-3'>
                <img  src={prod.image} alt={prod.title} height="100" width="100"/>
                <h1>{prod.title}</h1>
                <p>{prod.price}</p>
                <p>{prod.rating.rate}/5.0</p>
                <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  )
}

export default Home
