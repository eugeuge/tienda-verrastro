import './ItemListContainer.css';
import ItemCount from '..//ItemCount/ItemCount.jsx';
import ItemList from '..//ItemList/ItemList.jsx';

function ItemListContainer({greeting}) {
    const agregarAlCarrito = (contador) =>{
        console.log(`has agregado ${contador} items al carrito`)

    }
    return(
    <div className="containerItemList">
       
        <p className="greeting">{greeting}</p>
        <ItemCount stock={10} initial={1} onAdd={agregarAlCarrito}/>
        <ItemList/>
    </div>
            
    )
}

export default ItemListContainer;