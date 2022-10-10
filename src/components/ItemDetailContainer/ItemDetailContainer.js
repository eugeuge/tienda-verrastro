import React from 'react'
import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import {useParams} from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../../utils/firebase';

const ItemDetailContainer = () => {
const {id} = useParams()

const [data, setData] = useState({})
const [loading, setLoading] = useState(true)

useEffect(()=> {
const queryRef = doc(db, "items" , id)
getDoc(queryRef).then(response=>{
  const newDoc = {
    ...response.data(),
    id: response.id
  }
  setData(newDoc)
  setLoading(false)
}).catch(error=>console.log(error))
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