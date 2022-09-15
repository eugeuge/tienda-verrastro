import './CartWidget.css';
import iconoCart from '../../assets/iconoCart.svg';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartWidget() {
    const {getCantProducts, productCartList} = useContext(CartContext);

    return(
    <div className="containerCarrito">
        {
            productCartList.length > 0 &&
            <>
                     <div className="cart">
                     <Link to="/cart">
                     <img src={iconoCart} alt="Carrito"/>
                     </Link>
                     </div>
        
                     <p className="items">{getCantProducts()}</p>
            
            </>
        }
    </div>
    )
}

export default CartWidget;