import './ItemCount.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount({stock, initial, onAdd}) {
    const [contador, setContador] = useState(initial)

    const incrementarContador = () =>{
        if(contador < stock){
            setContador(contador + 1)
       } 
    }
    
   const decrementarContador = () =>{
        if(contador > 0){
            setContador(contador - 1)
       }            
    }



    return(
        <div className="containerContador">

           <p className="contador">{contador}</p> 
           <div className="masYmenos">
           <Button onClick={incrementarContador} variant="outline-secondary" className="mas">+</Button>
           <Button onClick={decrementarContador} variant="outline-secondary" className="menos">-</Button>
           </div>
           <Button onClick={() => (onAdd(contador))}variant="primary" className="agregarCarrito">Agregar al carrito</Button>

        </div>
        
        )
}
    
    export default ItemCount;