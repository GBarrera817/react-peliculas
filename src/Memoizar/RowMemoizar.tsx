import type Person from "../Model.Person";

export default function RowMemoizar({person, remove}: RowProps) {

    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.department}</td>
            <td>
                <button onClick={() => remove(person)}>Remove</button>
            </td>
        </tr>
    )

}

interface RowProps {
    person: Person;
    remove: (p: Person) => void; // remove es una funcion () que recibe como parametro a un objeto de tipo Person, y no devuelve nada: void
}