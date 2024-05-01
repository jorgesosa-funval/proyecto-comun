import React, { useEffect, useState } from "react"
import { MainContainer } from "./components/MainContainer"
import { NewIncome } from "./screens/NewIncome"
import { Main } from "./screens/Main"
import { NewOutcome } from "./screens/NewOutcome"
import { BackButton } from "./components/BackButton"
import { Report } from "./screens/Report"

const incomes = [];

const outcomes = [];


function App() {

  const [amount, setAmount] = useState(100)

  const [screen, setScreen] = useState({ title: "IO - CONTROL", view: "main" })

  useEffect(() => {
    if (localStorage.getItem('amount')) {
      setAmount(parseFloat(localStorage.getItem('amount')))
    } else {
      localStorage.setItem('amount', amount)
    }

    if (!localStorage.getItem('incomes')) {
      localStorage.setItem('incomes', JSON.stringify(incomes))
    }

    if (!localStorage.getItem('outcomes')) {
      localStorage.setItem('outcomes', JSON.stringify(outcomes))
    }
  }, [])

  return (
    <>

      <MainContainer title={screen?.title}>
        {screen?.view !== "main" && <BackButton onClick={() => setScreen( { title: "IO - CONTROL", view: "main" })} />}
        {screen?.view === "main" && <Main setScreen={setScreen} amount={amount} />}
        {screen?.view === "incomes" && <NewIncome setScreen={setScreen} amount={amount} setAmount={setAmount} />}
        {screen?.view === "outcome" && <NewOutcome setScreen={setScreen} amount={amount} setAmount={setAmount} />}
        {screen?.view === "report" && <Report setScreen={setScreen} />}
      </MainContainer>



    </>
  )
}

export default App
