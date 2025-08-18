import { useState } from "react";
import DynamicContent from "./DynamicContent";
import DynamicContentIf from "./DynamicContentIf";


export default function App() {

  // Forma 1: con operador ternario
  /*const [show, setShow] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={e => setShow(e.target.checked)} />
      <label htmlFor="">Mostar el mensaje oculto</label>

      <DynamicContent showContent={show} />

    </>
  );*/

  // Forma 2: con If

  const [grade, setGrade] = useState<number | null>(null); // grade es del tipo de dato number o null y se inicializa con null (para no mostrarlo)

  return(
    <>
      <label htmlFor="">Ingrese la calificación: </label>
      <input type="nuber" onChange={e => setGrade(Number(e.target.value))} />

      {grade ? <DynamicContentIf grade={grade}/> : undefined}
    </>
  )

}

