import React from 'react'
import { MainInput } from '../components/Input'
import { ItemButton } from '../components/ItemButton'

export const Main = ({ amount, setScreen }) => {
   
    return (
        <>
            <MainInput value={amount} disabled={true} />

            <div className="w-full py-12 flex flex-col items-center gap-8 h-full">
                <ItemButton onClick={()=>setScreen({title: "Nuevo Ingreso", view:"incomes"})} variant="amber" content="Ingreso"/>
                <ItemButton onClick={()=>setScreen({title: "Nuevo Gasto", view:"outcome"})} variant="cyan" content="Gastos" />
                <ItemButton onClick={()=>setScreen({title: "Reportes", view:"report"})} variant="pink" content="Reporte" />
                <ItemButton variant="green" content="config" />
            </div> 

        </>
    )
}
