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


    {/* <Backdrop>
      {isSubmitted && (
        <div className="py-12 text-center">
          <div className="inline-flex items-center justify-center bg-white/10 w-16 h-16 rounded-full mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">You're on the List!</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Thank you for joining our waitlist. We'll keep you updated on our launch and early access opportunities.
          </p>
        </div>
      )}
    </Backdrop> */}