import React from 'react'

export const MainContainer = ({ title,children }) => {
  return (
    <div className="w-full min-h-screen  bg-sky-900 sm:max-w-96 mx-auto flex flex-col relative">
      <h1 className="text-center pt-8 pb-12 text-3xl font-bold text-white">{title}</h1>

      {children}

    </div>
  )
}
