import React from 'react'
import './Item.css'
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';

const Item = ({data}) => {
  return (
    <div>
        <div className="product" key={data.id}>
                    <img src={data.img} alt="" />
                    <p className="nombre">{data.name}</p>
                    <p className="precio">$ {data.price} </p>
                    <LinkContainer to={`/item/${data.id}`}><Button variant="primary" className="detalle">Ver Detalle</Button></LinkContainer>
                </div>
    </div>
  )
}

export default Item
