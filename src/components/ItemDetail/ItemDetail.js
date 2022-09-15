import ItemCount from '../ItemCount/ItemCount.js'
import { useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const ItemDetail = ({data}) => {
    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0)

const agregarAlCarrito = (contador) =>{
    const newProduct={...data, quantity:contador, totalParcial: contador * data.price}
    addProduct(newProduct)
    setQuantity(contador)

}

//console.log(data)
        return (
            <div className="itemContainer">
                <div className="itemDetail">
                    <img src={data.img} alt="" />

                <div className="detail">

                         <h2>{data.name}</h2>
                         <h3>$ {data.price}</h3>
                         <h4>{data.year}</h4>
                         <p>{data.categoria}</p>
                         <p>{data.description}</p>
                         <ItemCount stock={10} initial={1} onAdd={agregarAlCarrito}/>
                         {
                    quantity > 0 &&
                    <Link to="/cart">
                    <Button variant="primary">Ir al carrito</Button>
                    </Link>
                    }

                </div>


                </div>



        
    </div>
  )
}

export default ItemDetail