
import caloventor from "../components/assets/caloventor.png"
import cepilloEle from "../components/assets/Cepilloelectrico.png"
import microhondas from "../components/assets/microhondas.png"

export const products = [{
    id: 1,
    name: "Caloventor",
    description: "Caloventor electrico de 500w",
    img: caloventor,
    price: 35000,
    stock: 10,
    category:"hogar" ,
},
{
    id: 2,
    name: "Cepillo Electrico",
    description: "Cepillo Electrico de hogar",
    img: cepilloEle,
    price: 75000,
    stock: 6,
    category:"ferreteria" , 
},
{
    id: 3,
    name:"Microhondas",
    description: "Microhondas marca philco 20 litros",
    img: microhondas,
    price: 155000,
    stock: 15,
    category:"pequenos-electrodomesticos" , 
    


},
{
    id: 4,
    name:"Microhondas 2",
    description: "Microhondas marca philco 40 litros ",
    img: microhondas,
    price: 155120,
    stock: 15,
    category:"pequenos-electrodomesticos" , 
    


},
{
    id: 5,
    name:"Microhondas 3",
    description: "Microhondas marca philco 30 litros",
    img:microhondas,
    price: 152300,
    stock: 15,
    category:"pequenos-electrodomesticos" , 
    


},
{
    id: 6,
    name:"Microhondas 4",
    description: "Microhondas marca philco 50 litros",
    img: microhondas,
    price: 156000,
    stock: 15,
    category:"pequenos-electrodomesticos" , 
    


}]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)

             //reject('No se pudo traer los productos')
        }, 1000)
    })

}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter((elem)=> elem.category === categoryId))

             //reject('No se pudo traer los productos')
        }, 1000)
    })}

    export const getProductsById = (productosId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const product =products.find((elem)=> elem.id === parseInt(productosId))
                resolve (product)
    
                 //reject('No se pudo traer los productos')
            }, 1000)
        })}