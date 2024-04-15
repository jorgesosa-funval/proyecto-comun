import React, { useState } from 'react'

export const Dropdown = ({ onChange, value }) => {
    
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div onClick={()=>setIsOpen(!isOpen)} className="relative flex  w-9/12 mx-auto h-12 border px-3 rounded-md font-bold text-gray-200 mb-10 justify-between items-center cursor-pointer">
                
                <span>Select category</span>
                <span>icon</span>

                <ul defaultValue={value} onChange={onchange} className={`'mx-auto absolute top-12 border w-full left-0 px-4 py-2 bg-gray-300 text-sky-950 rounded-md flex-col gap-2 bg-opacity-90  ${isOpen ? 'flex' : 'hidden'} trasition-all`}>
                    <li value="Prueba" className='cursor-pointer hover:bg-gray-200'>Probando</li>
                    <li value="Prueba" className='cursor-pointer hover:bg-gray-200'>Probando</li>
                    <li value="Prueba" className='cursor-pointer hover:bg-gray-200'>Probando</li>
                    <li value="Prueba" className='cursor-pointer hover:bg-gray-200'>Probando</li>
                    <li value="Prueba" className='cursor-pointer hover:bg-gray-200'>Probando</li>
                    <li value="Prueba" className='cursor-pointer hover:bg-gray-200'>Probando</li>
                </ul>
            </div>



        </>

    )
}
