import React from 'react'
import { useDispatch } from 'react-redux'
import "./CartButtons.css"
import { addToCart } from '../../redux/cart'

const BeforeCart = () => {
  const disptach = useDispatch()
  return (
    <div className='before-cart'>
        <button className='add-cart-button' onClick={() => disptach(addToCart())}>Add To Cart</button>
    </div>
  )
}

export default BeforeCart