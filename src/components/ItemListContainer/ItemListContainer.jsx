import './ItemListContainer.css';

function ItemListContainer({greeting}) {
    return(
    <div className="containerItemList">
       
        <p className="greeting">{greeting}</p>
    </div>
    )
}

export default ItemListContainer;