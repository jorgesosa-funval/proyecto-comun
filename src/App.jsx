import React from "react";
import Componente from "./Componente";
import { Jorge } from "./componentes/Jorge"
import { Input } from "./Vian"
import { Henry } from "./componentes/Henry"
import { Yon } from "./components/yon/yon"

function App() {
  return (
    <>
        <h1>Hola Mundo</h1>
        <h2>Hola Yagual</h2>
        <Input name="Vianey Galicia" />
        <Jorge />
        <Componente />
        <Yon />
        <Henry/>

    </>
  );
}

export default App;
