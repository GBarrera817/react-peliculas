// 3era forma de setear css: a partir de un css con el nombre del componente por convención: App.module.css
// import styles from './App.module.css'

import { useState } from "react";
import Header from "./Header";
import ShowText from "./ShowText";


// Componente App es un componente funcional que va a retornar Interfaz de Usuario (UI)
export default function App() {

  // Se ejecuta toda la funcion App cada vez que para el evento
  console.log('renderizando el componente App')

  // Hooks
  const [texto, setTexto] = useState(''); 

  // La variable siempre se iniciará en '', cada vez que se renderice el componente. Por eso es importante que si quiero que el valor de la variable se mantenga entre renderizados, se use el useState
  let texto2 = '';
  console.log(texto2);

  const manejarClick = () => alert('click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    texto2 = e.currentTarget.value;
    setTexto(e.currentTarget.value)

  }
  return (
    <>

      {/* Utikizar componente */}

      <Header/>

      <button onClick={manejarClick}>Clickeame</button>

      <div>
        <input type="text" onKeyUp={(e) => manejarKeyUp(e)}/>
      </div>
      
      <ShowText texto={texto} />

      <Header/>

    </>
  );
}

