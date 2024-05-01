import React, { useEffect, useState } from 'react'
import { Table } from '../components/Table'
import { Dropdown } from '../components/Dropdown'

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
export const Report = () => {
    const [filtered, setFiltered] = useState({})
    const [data, setData] = useState([])

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

    const pruebaForm = (e) => {
        const name = e.target.name
        if (e.target.type === 'checkbox') {

            setFiltered({ ...filtered, [name]: e.target.checked })
            return;
        }
        if (e.target.type === 'date') {
            setFiltered({ ...filtered, [name]: formatDate(e.target.value) })
        }

    }

    useEffect(() => {
        const incomes = JSON.parse(localStorage.incomes);
        const outcomes = JSON.parse(localStorage.outcomes);
        console.log(outcomes, incomes)
        function compareDates(a, b) {
            const dateA = new Date(a.fecha);
            const dateB = new Date(b.fecha);
            return dateA - dateB; 
        }


        if (filtered.entradas && !filtered.salidas && filtered.inicio != '' && filtered.final) {

            const rs = incomes.filter(a => (new Date(a.fecha)) >= (new Date(filtered.inicio)) && (new Date(a.fecha)) <= (new Date(filtered.final)));

            setData(rs);
            return;
        }

        if (!filtered.entradas && filtered.salidas && filtered.inicio && filtered.final && !filtered.category) {

            const rs = outcomes.filter(a => (new Date(a.fecha)) >= (new Date(filtered.inicio)) && (new Date(a.fecha)) <= (new Date(filtered.final)));

            setData(rs);

            return;
        }

        if (!filtered.entradas && filtered.salidas && filtered.inicio && filtered.final && filtered.category) {

            const rs = outcomes.filter(a => (new Date(a.fecha)) >= (new Date(filtered.inicio)) && (new Date(a.fecha)) <= (new Date(filtered.final)) && a.category === filtered.category);

            setData(rs);

            return;
        }

        if (filtered.inicio && filtered.final) {
            const merged = []
            const merge = incomes.concat(outcomes);

            merge.forEach(mg => {
                merged.push({
                    
                    monto: mg.monto,
                    type: mg.categoria ? 'out' : 'in',
                    saldo: mg.saldo,
                    fecha: mg.fecha,
                })
            });

            const rs = merged.filter(a => (new Date(a.fecha)) >= (new Date(filtered.inicio)) && (new Date(a.fecha)) <= (new Date(filtered.final)));

            rs.sort(compareDates);

            setData(rs);

            return;
        }

    }, [filtered])

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

            {filtered?.salidas && !filtered?.entradas &&
                <Dropdown lbl_fild="category" value_field="id" options={categories} selectedValue={filtered.category} onChange={(cat) => setFiltered({ ...filtered, category: cat })} />
            }

            {data.length > 0 &&
                <Table data={data} formatDate={formatDate} />
            }
        </>
    )
}
