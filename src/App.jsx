import React, { useState } from "react"
import { ItemButton } from "./components/ItemButton"
import { MainInput } from "./components/Input"
import { MainContainer } from "./components/MainContainer"
import { Textarea } from "./components/Texarea"
import { Dropdown } from "./components/Dropdown"



function App() {
  const [amount, setAmount] = useState('00.00')

  return (
    <>

      <MainContainer title="Nuevo Ingreso">

        <MainInput value={amount} disabled={true} />

        {/* <div className="w-full py-12 flex flex-col items-center gap-8 h-full">
          <ItemButton variant="amber" content="Ingreso" />
          <ItemButton variant="cyan" content="Gastos" />
          <ItemButton variant="pink" content="Reporte" />
          <ItemButton variant="green" content="config" />
        </div> */}

        <Dropdown/>

        <Textarea/>

        <ItemButton variant="amber" content="Guardar"/>

      </MainContainer>



    </>
  )
}

export default App
