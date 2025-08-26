import React from "react";

const ContextValue = React.createContext('Valor por defecto');

// Ahora existe un contexto (ContextValue) con el cual componentes como Child se puedan alimentar de dicho valor

export default ContextValue;