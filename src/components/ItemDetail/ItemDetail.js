import { useContext, useMemo, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import LowStockMsg from "./LowStockMsg"
import "./ItemDetail.scss"

const ItemDetail = ({ item }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div className="flex-container-detail">
            <div className="flex">
                <div className="flex-1">
                    <img className="imgDetail" src={item.img} alt={item.name} />
                </div>
                <div className="flex-buttons">
                    <h1 id="name" className="text-black">{item.name}</h1>
                    <h1 id="price" className="text-black price-detail" >${item.price}</h1>
                    {item.stock <= 5 && <LowStockMsg stock={item.stock} />}
                    {
                    isInCart(item.id)
                        ? <Link to="/cart" className="btn bg-black text-white buttons">Terminar mi compra</Link>
                        : <ItemCount
                            max={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            handleAgregar={handleAgregar}
                        />
                    }

                    <br />
                    <button onClick={handleVolver} className="btn bg-black text-white buttons">Volver</button>
                </div>
            </div>

            <div className="flex-2">
                <h1 className="description-title">Descripcion</h1>
                <p>{item.description}</p>
                <img src="../imagenes/img-description.webp" alt="" />
            </div>
        </div>
    )
}

export default ItemDetail