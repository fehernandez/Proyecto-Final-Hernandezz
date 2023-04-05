import { useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, limit } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)
        
        // 1- referencia (sync)
        const productosRef = collection(db, "productos")
        const q = categoryId 
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
        // 2- pedir esa refencia (async)
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                }) 
                setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoryId])


    return (
        <div className="contenedor">
            {loading 
                ? <h2>Cargando...</h2>
                : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer