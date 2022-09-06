import {useState,useEffect} from 'react'
import obtenerItems from '../../helper/helper.js'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import {useParams} from 'react-router-dom';

function ItemListContainer() {
    const categoria = useParams()
    // Puse estos console.log() porque me volví loca tratando de === estos valores a los que obtenía del data,
    // hasta que me di cuenta que (entiendo que debe ser por usar bootstrap) el useParams me devuelve un objeto.
    console.log(categoria)
    console.log(categoria.categoria)

    const idCategoria = categoria.categoria
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        obtenerItems.then(data => {
            if (!idCategoria){
                setData(data)
                setLoading(false)
            } else {
            const productosPorCategoria = data.filter( producto => producto.categoria === idCategoria )
            setData(productosPorCategoria)
            setLoading(false)
        }
        })
    }, [idCategoria])

    return(
    <div className="containerItemList">
                <h1>Fotos disponibles</h1>

                {
                loading ? <h2>Cargando...</h2> 
    
                 :
                 <ItemList data = {data}/>
                }
    </div>
            
    )
}

export default ItemListContainer;