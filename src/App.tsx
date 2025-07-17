// 3era forma de setear css: a partir de un css con el nombre del componente por convención: App.module.css
// import styles from './App.module.css'


// Componente App es un componente funcional que va a retornar Interfaz de Usuario (UI)
export default function App() {

  const manejarClick = () => alert('click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => texto = e.currentTarget.value;

  let texto = '';

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

