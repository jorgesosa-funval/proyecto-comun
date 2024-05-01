import React, { useState } from 'react'
import { Textarea } from '../components/Texarea'
import { ItemButton } from '../components/ItemButton'
import { MainInput } from '../components/Input'

export const NewIncome = ({ amount, setAmount, setScreen }) => {
    const formatDate = (baseDate, format = 'en-US') => {
        const utcDate = new Date(baseDate).getTime() + (new Date()).getTimezoneOffset() * 60000;
        const date = new Date(utcDate);

        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        };

        return date.toLocaleString(format, options);
    };
    const [data, setData] = useState({
        id: 1,
        monto: 0,
        coment: "",
        saldo: 0,
        fecha: formatDate(new Date())
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        let newAmount = amount + data.monto;
        setAmount(newAmount)

        const addMOnto = {...data, saldo: newAmount}

        const incomes = JSON.parse(localStorage.getItem("incomes"))

        localStorage.setItem("incomes", JSON.stringify([...incomes, addMOnto]))

        localStorage.setItem("amount", newAmount)

        setScreen({ title: "IO - CONTROL", view: "main" })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <MainInput value={data.amount} onChange={(e) => setData({ ...data, monto: parseFloat(e.target.value) })} disabled={false} />

                <Textarea onChange={(e) => setData({ ...data, coment: e.target.value })} />

                <ItemButton variant="amber" content="Guardar" />
            </form>
        </>
    )
}
