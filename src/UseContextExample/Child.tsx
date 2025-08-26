import { useContext } from "react";
import ContextValue from "./ContextValue";

export default function Child() {

    const value = useContext(ContextValue)

    return <h3>Este es el componente hijo. El valor es <strong>{value}</strong></h3>;
}