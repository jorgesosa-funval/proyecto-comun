import React, { useEffect, useState } from "react"
import { MainContainer } from "./components/MainContainer"
import { NewIncome } from "./screens/NewIncome"
import { Main } from "./screens/Main"
import { NewOutcome } from "./screens/NewOutcome"



function App() {
 


  const [amount, setAmount] = useState('00.00')
  const [screen, setScreen] = useState({title: "IO - CONTROL", view:"main"})

  useEffect(() => {
    console.log(screen)
  }, [])
  return (
    <>

      <MainContainer title={screen?.title}>

         {screen?.view === "main" && <Main setScreen={setScreen} amount={amount} />}
         {screen?.view === "incomes" && <NewIncome setScreen={setScreen} amount={amount}/>}
         {screen?.view === "outcome" && <NewOutcome setScreen={setScreen} amount={amount}/>}

 

      </MainContainer>



    </>
  )
}

export default App
