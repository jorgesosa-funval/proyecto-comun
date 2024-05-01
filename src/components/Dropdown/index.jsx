/* import React, { useState } from 'react'

export const Dropdown = ({ onChange, value }) => {
     
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div onClick={()=>setIsOpen(!isOpen)} className="relative flex  w-9/12 mx-auto h-12 border px-3 rounded-md font-bold text-gray-200 mb-10 justify-between items-center cursor-pointer">
                
                <span>{value || "Select category"}</span>
                <span>icon</span>

                <ul onClick={onChange} className={`'mx-auto absolute top-12 border w-full left-0 px-4 py-2 bg-gray-300 text-sky-950 rounded-md flex-col gap-2 bg-opacity-90  ${isOpen ? 'flex' : 'hidden'} trasition-all`}>
                    <li className='cursor-pointer hover:bg-gray-200'>Probando1</li>
                    <li className='cursor-pointer hover:bg-gray-200'>Probando2</li>
                    <li className='cursor-pointer hover:bg-gray-200'>Probando3</li>
                    <li className='cursor-pointer hover:bg-gray-200'>Probando4</li>
                    <li className='cursor-pointer hover:bg-gray-200'>Probando5</li>
                    <li className='cursor-pointer hover:bg-gray-200'>Probando6</li>
                </ul>
            </div>



        </>

    )
}
*/

import React, { useState } from 'react';

export const Dropdown = ({ options, selectedValue, onChange, placeholder = 'Select an option', customClass = '', lbl_fild, value_field }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className={`relative w-9/12 mx-auto mb-10 ${customClass}`}>
            <button
                type="button"
                className={`w-full h-12 border px-3 rounded-md font-bold text-gray-200 flex justify-between items-center cursor-pointer`}
                onClick={handleClick}
            >
                {selectedValue ? selectedValue : placeholder}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 ${isOpen ? 'transform rotate-180' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

            </button>
            {isOpen && (
                <ul
                    className={`absolute z-10 mt-1 w-full rounded-md shadow-sm bg-gray-300 bg-opacity-90 overflow-hidden font-bold text-sky-950 py-2 ${customClass} transition-all duration-500`}
                >
                    {options.map((option) => (
                        <li
                            key={option[value_field]}
                            className="block px-4 py-1 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(option[lbl_fild])}
                        >
                            {option[lbl_fild]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


