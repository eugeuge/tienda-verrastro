import './CartWidget.css';
import iconoCart from '../../assets/iconoCart.svg';

function CartWidget() {
    return(
    <div className="containerCarrito">
        <div className="cart">
        <img src={iconoCart} alt="Carrito"/>
        </div>
        
        <p className="items">4</p>
    </div>
    )
}

export default CartWidget;