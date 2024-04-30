import React, { useEffect, useState } from 'react'
import { Textarea } from '../components/Texarea'
import { ItemButton } from '../components/ItemButton'
import { MainInput } from '../components/Input'
import { Dropdown } from '../components/Dropdown'

export const NewOutcome = ({ amount, setAmount, setScreen }) => {
    const categories = [
        { id: 1, category: 'Alimentación' }, // Food
        { id: 2, category: 'Transporte' }, // Transportation
        { id: 3, category: 'Vivienda' }, // Housing
        { id: 4, category: 'Servicios Públicos' }, // Utilities
        { id: 5, category: 'Salud' }, // Health
        { id: 6, category: 'Educación' }, // Education
        { id: 7, category: 'Entretenimiento' }, // Entertainment
        { id: 8, category: 'Prendas de vestir' }, // Clothing
        { id: 9, category: 'Ahorros' }, // Savings
        { id: 10, category: 'Otros' }, // Other
    ];

    const cleanOutcome = {
        id: 0,
        amount: 0,
        category: '',
        coment: '',

    }
    const [data, setData] = useState(cleanOutcome);

    const submitOutcome = (e) => {
        e.preventDefault();
        let newAmount =amount - data.amount;
        setAmount(newAmount)

        const outcomes = JSON.parse(localStorage.getItem('outcomes'))
        localStorage.setItem('outcomes', JSON.stringify([...outcomes, data]))
        localStorage.setItem("amount", newAmount)
        setData(cleanOutcome)
        setScreen({ title: "IO - CONTROL", view: "main" })
    }
    return (
        <>

            <form onSubmit={submitOutcome} className='flex flex-col justify-center'>
                <MainInput value={data.amount} disabled={false} onChange={(e) => setData({ ...data, amount: parseInt(e.target.value) })} />
                <Dropdown lbl_fild="category" value_field="id" options={categories} selectedValue={data.category} onChange={(cat) => setData({ ...data, category: cat })} />
                <Textarea value={data.coment} onChange={(e) => setData({ ...data, coment: e.target.value })} />
                <ItemButton variant="amber" content="Guardar" />
            </form>
        </>
    )
}
