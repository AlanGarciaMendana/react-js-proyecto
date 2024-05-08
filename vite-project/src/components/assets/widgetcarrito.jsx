import carrito from "../assets/carrito-compras.png"
import { Link,NavLink } from 'react-router-dom'


const Carritocompras = () =>{
    return(
        <div className="Carrito">
    <Link className="Carrito" to="/carrito"> 🛒</Link>
    <span className="Carrito">0</span>
        </div>
    )
}

export default Carritocompras