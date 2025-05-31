import React from 'react'

export function Backdrop({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  return (
    <div className='fixed inset-0 w-full h-screen bg-black/50 flex justify-center items-center z-60 transition-opacity duration-300 ease-in-out'>
      <div className="bg-white rounded-md shadow-lg p-12 w-full max-w-lg relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modalFadeIn">{children}</div>
    </div>
  )
}