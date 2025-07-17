// 3era forma de setear css: a partir de un css con el nombre del componente por convención: App.module.css
// import styles from './App.module.css'

import { useState } from "react";


// Componente App es un componente funcional que va a retornar Interfaz de Usuario (UI)
export default function App() {

  // Se ejecuta toda la funcion App cada vez que para el evento
  console.log('renderizando el componente App')

  // Hooks
  const [texto, setTexto] = useState(''); 

  let texto2 = '';
  console.log(texto2);

  const manejarClick = () => alert('click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    texto2 = e.currentTarget.value;
    setTexto(e.currentTarget.value)

  }
  return (
    <>
      <h1 className='rojo'>Hola mundo</h1>

      <button onClick={manejarClick}>Clickeame</button>

      <div>
        <input type="text" onKeyUp={(e) => manejarKeyUp(e)}/>
      </div>
      <div>
        <p>Haz escrito: {texto}</p>
      </div>
    </>
  );
}

