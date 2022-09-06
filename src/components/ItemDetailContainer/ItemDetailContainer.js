import React from 'react'
import {useState,useEffect} from 'react'
import obtenerItems from '../../helper/helper.js'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () => {
const {id} = useParams()
console.log(id)
console.log(typeof id)


const [data, setData] = useState({})
const [loading, setLoading] = useState(true)

useEffect(()=> {
  obtenerItems
  .then(response => {
      setData(response.find(prod => prod.id === parseInt(id)))
      setLoading(false)
  })
}, [id])

  return (
    <div className='containerDetail'>
              <h1>Detalle de la foto</h1>
        {
            loading ?  <h2>Cargando...</h2>
            :
        <ItemDetail data={data}/>
}
    </div>
  )
}

export default ItemDetailContainer