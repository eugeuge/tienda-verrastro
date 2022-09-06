import ItemCount from '../ItemCount/ItemCount.js'
import './ItemDetail.css'

const ItemDetail = ({data}) => {

const agregarAlCarrito = (contador) =>{
    console.log(`has agregado ${contador} items al carrito`)

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
                </div>

                </div>



        
    </div>
  )
}

export default ItemDetail