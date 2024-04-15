import React from 'react'

export const MainInput = ({disabled, onChange, value}) => {
    return (
        <div className="relative flex flex-col w-9/12 mx-auto h-12 border px-4 rounded-md font-bold text-gray-200 mb-10">
            <label className="absolute -top-4 text-lg  bg-sky-900 px-10" htmlFor="amount">Saldo</label>
            <input value={value} id='amount'  onChange={onChange} type="text" disabled={disabled} className="h-full bg-transparent text-lg text-right outline-none"/>
        </div>
    )
}
