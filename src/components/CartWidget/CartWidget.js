import './CartWidget.css';
import iconoCart from '../../assets/iconoCart.svg';
import {Link} from 'react-router-dom';

function CartWidget() {
    return(
    <div className="containerCarrito">
        <div className="cart">
        <Link to="/cart">
        <img src={iconoCart} alt="Carrito"/>
        </Link>
        </div>
        
        <p className="items">4</p>
    </div>
    )
}

export default CartWidget;