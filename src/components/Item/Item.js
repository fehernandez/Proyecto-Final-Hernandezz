import { Link } from "react-router-dom"
import "./Item.scss"

const Item = ({ item }) => {

    return (
        <div className='flex-item'>
            <h4 className="product">{item.name}</h4>
            <img className="img" src={item.img} alt={item.name} />
            <p className="price">${item.price}</p>
            <Link to={`/producto/${item.id}`} id="button" className='btn btn-outline'>Ver detalle del producto</Link>
        </div>
    )
}

export default Item