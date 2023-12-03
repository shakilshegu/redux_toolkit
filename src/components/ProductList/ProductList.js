import React, { useState } from 'react'
import products from "../api/products.json"
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'
import "./ProductList.css"
import {useSelector} from "react-redux"


const ProductList = () => {
  
  const cart = useSelector((state)=> state.cart)

  const [count,setCount] = useState(0)

  const addToCart = ()=>{
    setCount(1)
  }





  return (
   <section className='container'>
     {products?.map((product,key)=>(
      <div className='product-container' key={key}>
           <img src={product?.image} alt=''></img>
          <h3>{product?.title}</h3>
          {count > 0 ?  <AfterCart/>: <BeforeCart addToCart={addToCart}/>}
         
        
      </div>
     ))}
   </section>
  )
}

export default ProductList