import React from 'react'
import { Table } from '../components/Table'
import { Dropdown } from '../components/Dropdown'
const data = [
    {
        id: 1,
        fecha: "2024-12-1",
        monto: "2,405",
        tipo: "In",
        category: "Comida para comer cuando como",
    },
    {
        id: 2,
        fecha: "2024-12-2",
        monto: "2,400",
        tipo: "Sa",
        category: "Comida para comer cuando como",
    },
    {
        id: 3,
        fecha: "2024-12-3",
        monto: "2,402",
        tipo: "In",
        category: "Comida para comer cuando como",
    },
]
export const Report = () => {
    const pruebaForm = (e) => {
        console.log(e.target.name)
    }
    return (
        <>
            <form onChange={pruebaForm}>
                <div className='flex  justify-around w-full text-gray-50'>
                    <label htmlFor="entradas">
                        <input type="checkbox" name="entradas" id="entradas" className='mr-3' />
                        Entradas
                    </label>

                    <label htmlFor="salidas">
                        <input type="checkbox" name="salidas" id="salidas" className='mr-3' />
                        Salidas
                    </label>
                </div>
                <div className='flex  justify-around w-full p-4 text-gray-50 gap-6 pt-2'>
                    <label htmlFor="inicio">
                        Inicio
                        <input type="date" name="inicio" id="inicio" className=' w-full h-8 rounded-md px-2 text-gray-950' />

                    </label>

                    <label htmlFor="final">
                        Final
                        <input type="date" name="final" id="final" className=' w-full h-8 rounded-md px-2 text-gray-950' />

                    </label>
                </div>
            </form>
            <Dropdown />

            <Table data={data} />

        </>
    )
}
