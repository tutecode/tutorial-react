import Card from "../Card"
import Mundo from "./Mundo"

const miElemento = <h1>Hola</h1>

// Props
const Hola = ({
    numero1,
    numero2
}) => {

    const elemento = (e) => {
        e.preventDefault()
        console.log(numero1 + numero2)
    }

    let titulo = "Hola"

    return (
        <>
            {miElemento}
            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 1g:max-w-none">
                <Card titulo={titulo}/>
                <Card/>
            </div>
            <Mundo numero1={numero1} numero2={numero2} />
            <button
                onClick={e => elemento(e)}
                className="bg-blue-400 p-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Sumar
            </button>
        </>
    )
}

export default Hola