import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // StrictMode hace que el componente se renderice 2 veces, solo en tiempo de Desarrollo, para así evidenciar malas prácticas que puedan surgir en el código.
  <StrictMode>
    <App />
  </StrictMode>,
)
