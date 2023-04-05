import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import "./Cart.scss"

const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>No tienes productos agregados</h2>
                <hr/>
                <Link to="/" className="btn bg-black text-white">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.name}</h4>
                        <img className="w-25" src={prod.img} alt={prod.name}/>
                        <div>
                        <p>Precio unitario: ${prod.price} </p>
                        <p className="mt-3">Precio Total: ${prod.price * prod.cantidad}</p>
                        <p className="text-5">Cantidad: {prod.cantidad}</p>
                        </div>
                        <button 
                            onClick={() => eliminarDelCarrito(prod.id) } 
                            className="btn btn-danger"
                        >
                            <BsFillTrashFill/>
                        </button>
                        <hr/>
                    </div>
                ))
            }

            <h4>TOTAL: ${totalCompra().toFixed(2)}</h4>
            <button onClick={vaciarCarrito}  className="btn bg-black text-white mr-5">Vaciar carrito</button>
            <Link id="checkout" className="btn bg-black text-white" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart