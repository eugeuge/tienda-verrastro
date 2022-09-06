import Item from '../Item/Item.js'
import './ItemList.css'

const ItemList = ({data}) => {

  return (

     
        <div  className="grillaProductos" >
            {data.map(data => (
                    <Item key={data.id} data={data}/>
            ))}
        </div>


  )
}

export default ItemList