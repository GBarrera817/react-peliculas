import ContextValue from "./ContextValue";
import GranParent from "./GrandParent";

export default function UseContextExample() {
    // Configuración de un proveedor
    // Cualquier componente hijo de este proveedor va a poder alimentarse del valor que se coloque en el contexto

    const text = 'El texto que deseo pasar';

    return (
        // <ContextValue.Provider value={text}>
        //     <GranParent/>
        // </ContextValue.Provider>

        // Si no hay un proveedor, se utiliza el valor por defecto, seteado en el useContext
        <GranParent/>
    )
}