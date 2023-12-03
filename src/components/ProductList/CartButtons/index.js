import React from 'react'

const CardButton = () => {
  return <>
      {cartCount > 0 ?  <AfterCart/>: <BeforeCart product={product}/>} </>
}

export default CardButton