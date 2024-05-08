
import { useState,useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../utils/items-data";
import {ItemList} from "../itemlist/itemlist"
import { useParams } from "react-router-dom";
export const ItemListContainer = (  ) => {
    const [products, setProducts] = useState([])


const {categoryId} =useParams()
useEffect(() => {
    if(categoryId){
        getProductsByCategory(categoryId).then((res)=>
        setProducts(res))
    }else{
    getProducts()
        .then((res) => {
            setProducts(res)
        })
        .catch((error) => {
            console.log(error)
        })}
}, [categoryId])

return (

    <ItemList productsList={products}/>

)
}