import React from 'react'

export const Textarea = ({onChange, value}) => {
  return (
    <div className="pb-12 mx-auto w-4/5">
          <textarea onChange={onChange} value={value} className="w-full text-lg text-sky-950 font-medium rounded-md resize-none h-56 p-2 bg-gray-200 bg-opacity-55 placeholder:text-lg placeholder:text-sky-800" placeholder="Descripcion del gasto"></textarea>
        </div>
  )
}
