import { useState } from "react";
import type Person from "./Model.Person";
import Row from "./Row";

export default function Table() {
    
    const peopleSource: Person[] = [
        { id: 1, name: 'Felipe', department: 'Engineering'},
        { id: 2, name: 'Claudia', department: 'Human Resources'},
        { id: 3, name: 'Roberto', department: 'Contability'},
        { id: 4, name: 'Francisca', department: 'Contability'},
        { id: 5, name: 'José', department: 'Operations'},
        { id: 6, name: 'Estefany', department: 'Engineering'},
        { id: 7, name: 'Norberto', department: 'Human Resources'},
    ];

    const [people, setPeople] = useState(peopleSource);

    const removePerson = (person: Person) => {

        setPeople(
            people.filter(p => p.id !== person.id)
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {people.map(p => <Row key={p.id} person={p} remove={removePerson}/>)}
            </tbody>
        </table>
    )
}