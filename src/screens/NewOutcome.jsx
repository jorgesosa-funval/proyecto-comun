import React, { useState } from 'react'
import { Textarea } from '../components/Texarea'
import { ItemButton } from '../components/ItemButton'
import { MainInput } from '../components/Input'
import { Dropdown } from '../components/Dropdown'
import { BackButton } from '../components/BackButton'

export const NewOutcome = ({ amount }) => {
    const cleanOutCome = {
        id: 0,
        amount: 0,
        category: '',
        coment: '',

    }
    const [data, setData] = useState(cleanOutCome);

    const submitOutcome = (e) => {
        e.preventDefault();
        console.log(data)
    }
    return (
        <>
            
            <form onSubmit={submitOutcome} className='flex flex-col justify-center'>
                <MainInput value={data.amount} disabled={false} onChange={(e) => setData({ ...data, amount: e.target.value })} />
                <Dropdown value={data.category} onChange={(e) => setData({ ...data, category: e.target.textContent })} />
                <Textarea value={data.coment} onChange={(e) => setData({ ...data, coment: e.target.value })} />
                <ItemButton variant="amber" content="Guardar" />
            </form>
        </>
    )
}
