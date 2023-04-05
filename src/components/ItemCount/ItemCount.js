

const ItemCount = ( {max, cantidad, setCantidad, handleAgregar} ) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className="my-3">
            <button 
                onClick={handleRestar} 
                className={`btn boton ${cantidad === 1 ? "btn bg-black text-white" : "btn bg-black text-white"}`}
                disabled={cantidad === 1}
            >
                -
            </button>

            <span className="mx-2">{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className={cantidad === max ? "btn bg-black text-white" : "btn bg-black text-white"}
                disabled={cantidad === max}
            >
                +
            </button>

            <br/>
            <button onClick={handleAgregar} className="btn bg-black text-white buttons">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount