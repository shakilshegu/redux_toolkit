import React from 'react'
import "./CartButtons.css"
import { useDispatch } from 'react-redux'
import { dncrement, increment } from '../../redux/cart'

const AfterCart = ({cartCount}) => {
  const disptach = useDispatch()
  return (
  < div className='after-cart'>
    <button className='cart-counter-button' onClick={()=> disptach(dncrement())}>-</button>
    <div className='cart-count'>{cartCount}</div>
    <button className='cart-counter-button' onClick={()=> disptach(increment())}>+</button>
  </div>
  )
}

export default AfterCart