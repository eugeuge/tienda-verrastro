import {useState,useEffect} from 'react'
import obtenerItems from '../../helper/helper.js'
import Item from '../Item/Item.jsx'
import './ItemList.css'

const ItemList = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        obtenerItems.then(data => {
            setData(data)
            setLoading(false)
        })
    }, [])
  return (
    <>
        <h1> Item List Container</h1>

    {
        loading ? <h2>Cargando...</h2> 
        
        :
        
        <div  className="grillaProductos" >
            {data.map(data => (
                    <Item key={data.name} data={data}/>
            ))}
        </div>

    }
    </>
  )
}

export default ItemList