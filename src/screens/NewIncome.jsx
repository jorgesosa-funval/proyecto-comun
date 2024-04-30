import React, { useState } from 'react'
import { Textarea } from '../components/Texarea'
import { ItemButton } from '../components/ItemButton'
import { MainInput } from '../components/Input'

export const NewIncome = ({ amount, setAmount, setScreen }) => {
    const [data, setData] = useState({
        id: 1, 
        amount: 0,
        coment: "", 
        date: new Date()
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        let newAmount =amount + data.amount;
        setAmount(newAmount)
        

        const incomes = JSON.parse(localStorage.getItem("incomes"))
        localStorage.setItem("incomes", JSON.stringify([...incomes, data]))
        localStorage.setItem("amount", newAmount)

         setScreen({ title: "IO - CONTROL", view: "main" })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <MainInput value={data.amount} onChange={(e)=>setData({...data, amount: parseFloat(e.target.value)})} disabled={false} />

                <Textarea onChange={(e)=>setData({...data, coment: e.target.value})}/>

                <ItemButton variant="amber" content="Guardar" />
            </form>
        </>
    )
}
