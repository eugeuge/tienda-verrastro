import React from 'react'
import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';

function CartItem({item}) {
    const {removeItem} = useContext(CartContext);

    
    return(
          <div className="cartItemContainer">
          <img src={item.img} alt="" />
          <p>Fotografía: {item.name}</p>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Total: ${item.totalParcial}</p>
          <Button onClick={()=> removeItem(item.id)} className="botonEliminar" variant="danger">Eliminar</Button>
          
        </div>
    )

}
    
export default CartItem;