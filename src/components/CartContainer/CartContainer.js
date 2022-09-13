import React from 'react'
import './CartContainer.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem.js';
import Button from 'react-bootstrap/Button';

function CartContainer() {
    const {productCartList, clearCart} = useContext(CartContext);

    return(
    <div className='cart'>
      <p>Bienvenid@ a tu Carrito</p>
    {
        productCartList.map(item=>(
          <CartItem key={item.id} item={item}/>

        ))
      }
              <Button onClick={clearCart} variant="danger">Vaciar Carrito</Button>
      </div>


      

        )
    }
    
export default CartContainer;

