import {useState} from "react"
import Itemlistcontainer from "../itemlistcontainer/itemlistcontainer"
import caloventor from "../assets/caloventor.png"
import cepilloEle from "../assets/Cepilloelectrico.png"
import microhondas from "../assets/microhondas.png"



 const PaginaPrincipal = ({subtitulos}) => { 
    const [cantItemscalo, setCantImtescalo] = useState(0)
    const restaCantcalo = () => {
        if (cantItemscalo > 0) {
            setCantImtescalo(cantItemscalo - 1);
        }}

    const sumaCantcalo = () => {
            setCantImtescalo(cantItemscalo + 1)
          
    }
    const [cantItemscepi, setCantImtescepi] = useState(0)
    const restaCantcepi = () => {
        if (cantItemscepi > 0) {
            setCantImtescepi(cantItemscepi - 1);
        }}

    const sumaCantcepi = () => {
            setCantImtescepi(cantItemscepi + 1)
          
    }
    const [cantItemsmicro, setCantImtesmicro] = useState(0)
    const restaCantmicro = () => {
        if (cantItemsmicro > 0) {
            setCantImtesmicro(cantItemsmicro - 1);
        }}

    const sumaCantmicro = () => {
            setCantImtesmicro(cantItemsmicro + 1)
          
    }

    return(
        <>
        <h2 className="ofertasdesc">{subtitulos}</h2>
        <main>
        <div className="Tarjeta_ofertas uno">
            <img className="imgofertas" src= {caloventor} alt="caloventor" />
        <h3>CALOVENTOR ELECTRICO</h3>
        <p>Caloventor electrico de 500w</p>
        <p>$34.000</p>
            <div>
                <button className="botonescant" onClick={restaCantcalo}>-</button>
                <span>{cantItemscalo}</span>
                <button className="botonescant" onClick={sumaCantcalo}>+</button>
            </div>
         <button className="agregacarrito">Agregar al carrito</button> 
        </div>
        <div className="Tarjeta_ofertas dos">
            <img className="imgofertas" src= {cepilloEle} alt="cepillo" />
        <h3>CEPILLO ELECTRICO</h3>
        <p>Cepillo electrico de 500w</p>
        <p>$97.500</p>
            <div>
                <button className="botonescant" onClick={restaCantcepi}>-</button>
                <span>{cantItemscepi}</span>
                <button className="botonescant" onClick={sumaCantcepi}>+</button>
            </div>
         <button className="agregacarrito">Agregar al carrito</button> 
        </div>
        <div className="Tarjeta_ofertas tres">
            <img className="imgofertas" src= {microhondas}  alt="microondas" />
        <h3>MICROHONDAS</h3>
        <p>Microhondas para tu hogar</p>
        <p>$150.000</p>
            <div>
                <button className="botonescant" onClick={restaCantmicro}>-</button>
                <span>{cantItemsmicro}</span>
                <button className="botonescant" onClick={sumaCantmicro}>+</button>
            </div>
         <button className="agregacarrito">Agregar al carrito</button> 
        </div>
        </main>
        </>
    )

}

export default PaginaPrincipal