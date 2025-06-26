import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // Destructuracion
  const [horaActual, setHoraActual] = useState(new Date());

  // Funcionalidad
  useEffect(() => {
    const timerId = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  // UI
  return (
    <div>
      <h3>Ejemplo React</h3>
      <input />
      <div>{horaActual.toString()}</div>
    </div>
  )
}

export default App
