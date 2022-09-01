import React from 'react'
import './Item.css'
import Button from 'react-bootstrap/Button';

const Item = ({data}) => {
  return (
    <div>
        <div className="product" key={data.name}>
                    <img src={data.img} alt="" />
                    <p className="nombre">{data.name}</p>
                    <p className="precio">$ {data.price} </p>
                    <Button variant="primary" className="detalle">Ver Detalle</Button>
                </div>
    </div>
  )
}

export default Item
