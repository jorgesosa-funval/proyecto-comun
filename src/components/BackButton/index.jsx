import React from 'react'

export const BackButton = ({onClick}) => {
    return (
        <button onClick={onClick} className="absolute top-4 left-6 text-amber-400 bg-slate-200  bg-opacity-40 rounded-full p-2 hover:text-amber-300 hover:bg-opacity-25 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
        </button>
    )
}
