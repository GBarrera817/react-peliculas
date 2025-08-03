import Header from "./Header";
import ProjectContent from "./ProjectContent";
import ProjectContent2 from "./ProjectContent2";

export default function App() {

  return (
    <>
      <h2>Ejemplo 1</h2>
      <ProjectContent>
        <>
          <button onClick={() => alert('He sido clickeado')}>Clickeame</button>
          <h4>Este es un H4</h4>
        </>
      </ProjectContent>

      <h2>Ejemplo 2</h2>

      <ProjectContent2 
        parteSuperior={<button>Botón superior</button>}
        parteIntermedia={<>
          
            <Header/>
            <p>Lo que yo quiera</p>
        </>}
        parteInferior={<>
        
        </>}
      />
    </>
  );
}

