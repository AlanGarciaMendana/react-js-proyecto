import ItemCount from "../../utils/item-count"

const ItemDetail =({id,name,description,price,img,stock})=>{

return (  <div className="Pagina-Item">
<img src={img} alt={name} />
<h2> {name}</h2>
<p>{description}</p>
<p>${price}</p>
<p>Stock: {stock}</p>

<ItemCount/>
</div>)
}

export default ItemDetail