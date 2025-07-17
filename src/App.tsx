// 3era forma de setear css: a partir de un css con el nombre del componente por convención: App.module.css
import styles from './App.module.css'


// Componente App es un componente funcional que va a retornar Interfaz de Usuario (UI)
export default function App() {

  const subtitulo = 'Este es otro subtitulo';
  const duplicar = (valor: number) => valor * 2;
  const imagenURL = '/vite.svg';

  // 2da forma de establecer css a partir de un objeto y setear el atributo style en el tag con el nombre de la variable
  const cuadradoRojo = {
    backgroundColor: 'red',
    width: '50px',
    height: '50px',
    marginLeft: '1rem'
  }

  return (
    <>
      <h1 className='rojo'>Hola mundo</h1>
      <div style={cuadradoRojo}></div>
      <h3 className={styles.color}>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <div style={cuadradoRojo}></div>
      <img src={imagenURL} alt="logo_vite" />
    </>
  );
}

