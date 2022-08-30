import React from 'react'
import './Item.css'

const Item = ({data}) => {
  return (
    <div>
        <div className="product" key={data.name}>
                    <img src={data.img} alt="" />
                    <p className="nombre">{data.name}</p>
                    <p className="precio">$ {data.price} </p>
                </div>
    </div>
  )
}

export default Item
