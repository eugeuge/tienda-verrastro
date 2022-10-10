import {React, useState} from 'react'
import './CartContainer.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem.js';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { db } from '../../utils/firebase';
import {collection, addDoc,} from "firebase/firestore";
import Modal from 'react-bootstrap/Modal';



function CartContainer() {
    const {productCartList, clearCart, getTotalCompra} = useContext(CartContext);

    const [idOrder, setIdOrder] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const sendOrder = (e)=>{
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone:e.target[1].value,
        email:e.target[2].value
      },
      items: productCartList,
      total: getTotalCompra()
    }
    const queryRef = collection(db,"orders");
    addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
    handleShow()
  }

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
      <form className='formulario' onSubmit={sendOrder}>
      <p>Completá tus datos para confirmar tu compra</p>
      <div className='inputs'>
      <input type="text" placeholder='Nombre'/>
      <input type="text" placeholder='Telefono'/>
      <input type="email" placeholder='Email'/>
      </div>

      <Button type='submit' variant="primary">Enviar orden</Button>
      </form>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Gracias por tu compra!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu compra fué gestionada con el Nro. de Orden: {idOrder}. <br></br>
        Guardá ese dato por cualquier consulta que quieras hacer sobre el estado de tu pedido.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
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

