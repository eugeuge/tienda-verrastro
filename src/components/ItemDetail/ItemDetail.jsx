import {useState,useEffect} from 'react'
import obtenerItems from '../../helper/helper.js'
import ItemCount from '../ItemCount/ItemCount.jsx'
import './ItemDetail.css'

const ItemDetail = () => {
const [data, setData] = useState({})
const [loading, setLoading] = useState(true)
const agregarAlCarrito = (contador) =>{
    console.log(`has agregado ${contador} items al carrito`)

}

useEffect(()=> {
    obtenerItems
    .then(response => {
        setData(response.find(prod => prod.id === 1))
        setLoading(false)
    })
}, [])

console.log(data)
        return (
            <div className="itemContainer">
            <h1>Item Detail Container</h1>
        {
            loading ?  <h2>Cargando...</h2>
            :
            <div className="itemDetail">
                    <img src={data.img} alt="" />

                <div className="detail">
                         <h2>{data.name}</h2>
                         <h3>$ {data.price}</h3>
                         <h4>{data.year}</h4>
                         <p>{data.genre}</p>
                         <p>{data.description}</p>
                         <ItemCount stock={10} initial={1} onAdd={agregarAlCarrito}/>
                </div>

                </div>



        }
    </div>
  )
}

export default ItemDetail