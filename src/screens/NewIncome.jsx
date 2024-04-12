import React from 'react'
import { Textarea } from '../components/Texarea'
import { ItemButton } from '../components/ItemButton'
import { MainInput } from '../components/Input'

export const NewIncome = ({amount}) => {
    return (
        <>
            <MainInput value={amount} disabled={false} />

            <Textarea />

            <ItemButton variant="amber" content="Guardar" />
        </>
    )
}
