import { useState } from "react";
import TableMemoizar from "./TableMemoizar";

export default function TableMemoizarExample() {
    
    const [text, setText] = useState('');
    return (
        <>
            <input type="text" onChange={e => setText(e.target.value)} />

            <p>El texto es: {text}</p>
            
            <TableMemoizar/>
        </>
    );
}