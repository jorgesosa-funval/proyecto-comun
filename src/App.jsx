import React, { useEffect, useState } from "react"
import { MainContainer } from "./components/MainContainer"
import { NewIncome } from "./screens/NewIncome"
import { Main } from "./screens/Main"
import { NewOutcome } from "./screens/NewOutcome"
import { BackButton } from "./components/BackButton"
import { Report } from "./screens/Report"

const incomes = [
  {
    id: 6,
    amount: 987,
    saldo: 1200,
    comment: "Ingreso extra",
    fecha: "04/07/2024"
  },
  {
    id: 1,
    amount: 345,
    saldo: 1545,
    comment: "Pago de nómina",
    fecha: "04/02/2024"
  },
  {
    id: 2,
    amount: 120,
    saldo: 1420,
    comment: "Venta de producto",
    fecha: "04/03/2024"
  },
  {
    id: 3,
    amount: 567,
    saldo: 1987,
    comment: "Reembolso de gastos",
    fecha: "04/04/2024"
  },
  {
    id: 4,
    amount: 234,
    saldo: 1234,
    comment: "Intereses ganados",
    fecha: "04/05/2024"
  },
  {
    id: 5,
    amount: 980,
    saldo: 2180,
    comment: "Ganancia por inversión",
    fecha: "04/06/2024"
  },
  {
    id: 6,
    amount: 456,
    saldo: 1656,
    comment: "Premio por concurso",
    fecha: "04/07/2024"
  },
  {
    id: 7,
    amount: 321,
    saldo: 1321,
    comment: "Devolución de dinero",
    fecha: "04/08/2024"
  },
  {
    id: 8,
    amount: 789,
    saldo: 1789,
    comment: "Ingreso por trabajo freelance",
    fecha: "04/09/2024"
  },
  {
    id: 9,
    amount: 1234,
    saldo: 2234,
    comment: "Donación recibida",
    fecha: "04/10/2024"
  }
];

const outcomes = [
  {
    id: 0,
    amount: 20,
    category: "Entretenimiento",
    comment: "Salida con esposa",
    fecha: "04/02/2024"
  },
  {
    id: 1,
    amount: 35,
    category: "Comida",
    comment: "Almuerzo en restaurante",
    fecha: "04/03/2024"
  },
  {
    id: 2,
    amount: 12,
    category: "Transporte",
    comment: "Recarga de tarjeta de transporte",
    fecha: "04/04/2024"
  },
  {
    id: 3,
    amount: 50,
    category: "Entretenimiento",
    comment: "Entrada al cine",
    fecha: "04/05/2024"
  },
  {
    id: 4,
    amount: 25,
    category: "Hogar",
    comment: "Compra de artículos de limpieza",
    fecha: "04/06/2024"
  },
  {
    id: 5,
    amount: 70,
    category: "Salud",
    comment: "Consulta médica",
    fecha: "04/07/2024"
  },
  {
    id: 6,
    amount: 15,
    category: "Comida",
    comment: "Café y snack",
    fecha: "04/08/2024"
  },
  {
    id: 7,
    amount: 42,
    category: "Transporte",
    comment: "Pago de estacionamiento",
    fecha: "04/09/2024"
  },
  {
    id: 8,
    amount: 30,
    category: "Entretenimiento",
    comment: "Suscripción a plataforma de streaming",
    fecha: "04/10/2024"
  },
  {
    id: 9,
    amount: 85,
    category: "Otros",
    comment: "Compra de ropa",
    fecha: "04/11/2024"
  }
];


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
