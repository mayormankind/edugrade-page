"use client"

import { IconButton } from '@chakra-ui/react';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { Backdrop } from './Backdrop';
// import Backdrop from './Backdrop';

type RequestFormProps= {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AccountRequestForm({setFormOpen}: RequestFormProps) {

  const [ isSubmitting, setIsSubmitting ] = useState(false);

  return (
    <Backdrop>
      <>
        <IconButton w='fit' color={'black'} variant={'ghost'} aria-label='Close modal' className='absolute right-5 top-5 bg-transparent hover:bg-transparent hover:text-red-600' onClick={()=>setFormOpen(false)}><CloseIcon/></IconButton>
        <h1 className="text-xl font-bold text-gray-800">Request an Account</h1>
        <p className="text-sm text-gray-600 mb-4" >Fill out the form to get stared with EduGrade.</p>

        <form action="" className='flex flex-col gap-3'>
          <div className="field">
            <label>School Name</label>
            <input className="rounded-md border-gray-300 p-2 focus:ring focus:ring-blue-300"
              placeholder='Government College Ibadan' required/>
          </div>
          <div className="field">
            <label>School Email</label>
            <input type="email" className="rounded-md border-gray-300 p-2 focus:ring focus:ring-blue-300"
              placeholder='gci@yahoomail.com' required/>
          </div>
          <div className="field">
            <label>Person of Contact</label>
            <input type="text" className="rounded-md border-gray-300 p-2 focus:ring focus:ring-blue-300"
              placeholder='Admin name' required/>
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input type="tel" className="rounded-md border-gray-300 p-2 focus:ring focus:ring-blue-300"
              placeholder='Admin Contact Number' required/>
          </div>
          <div className="field">
            <label>School Permanent Address</label>
            <textarea className="rounded-md border-gray-300 p-2 focus:ring focus:ring-blue-300"
              placeholder='School Address' required></textarea>
          </div>
          <button onClick={()=>setIsSubmitting(true)}>{isSubmitting ? 'Processing...' : 'Submit Request'}</button>
        </form>
      </>
    </Backdrop>
  )
}
