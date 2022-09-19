import {useState,useEffect} from 'react'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import {useParams} from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../utils/firebase'

function ItemListContainer() {
    const categoriaParam = useParams()
    const idCategoria = categoriaParam.categoria
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)


    useEffect(()=> {

    const getProductos = async () => {
        try{
            let queryRef = !idCategoria ? collection(db,"items") : query(collection(db,"items"),where("categoria","==", idCategoria));
            const response = await getDocs(queryRef);
            const productos = response.docs.map (prod => {
                const newProd = {
                    ...prod.data(),
                    id: prod.id
                }
                return newProd;
            })
            setData(productos);
            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
        
    }
    getProductos();
    }, [idCategoria]);

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