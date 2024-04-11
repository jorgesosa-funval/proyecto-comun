import React from 'react'

export const ItemButton = ({ variant, content }) => {
  const variants = {
    green: 'bg-green-500 rounded-md hover:bg-green-400 active:bg-green-600',
    amber: 'bg-amber-500 rounded-md hover:bg-amber-400 active:bg-amber-600',
    cyan: 'bg-cyan-500 rounded-md hover:bg-cyan-400 active:bg-cyan-600',
    pink: 'bg-pink-500 rounded-md hover:bg-pink-400 active:bg-pink-600'

  }
  return (

    <button className={`w-4/6 text-gray-200 text-xl font-bold ${variants[variant]} border h-12 rounded-md self-center`}>
      {content}
    </button>

  )
}
