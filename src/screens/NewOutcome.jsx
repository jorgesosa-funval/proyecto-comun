import React, { useState } from 'react'
import { Textarea } from '../components/Texarea'
import { ItemButton } from '../components/ItemButton'
import { MainInput } from '../components/Input'
import { Dropdown } from '../components/Dropdown'

export const NewOutcome = ({ amount }) => {
    const cleanOutCome = {
        id: 0,
        amount: 0,
        category: '',
        coment: '',

    }
    const [data, setData] = useState(cleanOutCome)
    return (
        <>
        <form action=""></form>
            <MainInput value={amount} disabled={false} />
            <Dropdown />
            <Textarea />
            <ItemButton variant="amber" content="Guardar" />
        </>
    )
}
