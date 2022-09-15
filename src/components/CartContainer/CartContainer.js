import React from 'react'
import './CartContainer.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem.js';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';



function CartContainer() {
    const {productCartList, clearCart, getTotalCompra} = useContext(CartContext);

    return(
    <div className='cart'>
    <div>
      {
      productCartList.length > 0 ?
      <>
      <p>Bienvenid@ a tu Carrito</p>
      {
        productCartList.map(item=>(
          <CartItem key={item.id} item={item}/>

        ))
      }
      <div className='total'>
        <p>El total de tu compra es:  {getTotalCompra()}</p> 
      </div>
      <Button className='botonVaciar' onClick={clearCart} variant="danger">Vaciar Carrito</Button>
      </>
      :
      <>
      <p>No hay productos en tu carrito</p>
      <Link to="/">
      <Button className='botonVaciar' onClick={clearCart} variant="primary">Volver al catálogo</Button>
      </Link>
      </>
      }
    </div>
  
    </div>
)
    }
    
export default CartContainer;

