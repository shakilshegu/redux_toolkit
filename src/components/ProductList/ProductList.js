import React from 'react'
import products from "../api/products.json"

const ProductList = () => {
  return (
   <section className='container'>
     {products?.map((product,key)=>(
      <div className='main-container' key={key}>
           <img src={product?.image} alt=''></img>
          <h3>{product?.title}</h3>
      </div>
     ))}
   </section>
  )
}

export default ProductList