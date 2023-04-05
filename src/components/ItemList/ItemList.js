import Item from "../Item/Item"

const ItemList = ( {items} ) => {

    return (
        <div>           
            <div className='flex-container'>
            { items.map((producto) => <Item key={producto.id} item={producto}/>) }
            </div>
        </div>
    )
}

export default ItemList