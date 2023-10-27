import React from 'react'
import '../App.css'
const Ul = ({product}) => {

  return (
    <>
        <ul>
            <li className={product.isFruit ? "colorpurple" : "colorgreen"}>
                {product.title}
            </li>
        </ul>
    </>
  )
}

export default Ul