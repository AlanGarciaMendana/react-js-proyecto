import { useState } from "react";

const ItemCount =({stock})=>{

    const [cantItems, setCantItems] = useState(0)
    const restaCant = () => {
        if (cantItems > 0) {
            setCantItems(cantItems - 1);
            console.log (cantItemsc);
        }}
        const sumaCant = () => {
        
            setCantItems(cantItems + 1)
            console.log (cantItems)
}
return(
    <div>
<button onClick={restaCant}> - </button>
<span> {cantItems} </span>
<button onClick={sumaCant}> + </button>
<button>Agregar al carrito</button>
    </div>
)
}
export default ItemCount