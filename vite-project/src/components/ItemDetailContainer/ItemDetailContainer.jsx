import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../utils/items-data"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ()=>{
const {productosId} =useParams()
const [product, setProduct] = useState([])

useEffect(()=>{

    getProductsById(productosId)
    .then((res)=> {
        setProduct(res)})
    .catch((err)=>console.log(err))  
},[productosId]
)
return(<>
    <ItemDetail {...product} /> 
    </>
    )
}


export default ItemDetailContainer