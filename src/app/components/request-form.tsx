"use client"

import { IconButton } from '@chakra-ui/react';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { Backdrop } from './Backdrop';
import { useToast } from '@/hooks/use-toast';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import Close from '@mui/icons-material/Close';
import { Check } from 'lucide-react';

type RequestFormProps= {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AccountRequestForm({setFormOpen}: RequestFormProps) {

  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [error, setError] = useState("");

  const { toast } = useToast()

  const [client, setClient] = useState({
    school_name: '',
    school_email: '',
    contact_person: '',
    phone_number: '',
    purpose: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setClient((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if(!client.school_name || !client.school_email || !client.contact_person || !client.phone_number || !client.purpose){
      toast({
        title: "Incomplete details",
        description: "Ensure to fill in all details!",
        variant: "destructive",
      });
      setIsSubmitting(false)
      return;   
    }
    
    try {
      await addDoc(collection(db, "waitlist"), client)
      toast({
        title: "Welcome aboard",
        description: "You have been added to our wait list",
      });
      setIsSubmitted(true)
      setClient({ 
        school_name: '',
        school_email: '',
        contact_person: '',
        phone_number: '',
        purpose: '',
      })
      setIsSubmitting(false);

    } catch (error:any) {
      toast({
        title: "Something went wrong",
        description: error.message,
      })
    }
  }

  return (
    <Backdrop>
      <>
        <IconButton w='fit' color={'black'} variant={'ghost'} aria-label='Close modal' className='absolute right-5 top-5 bg-transparent hover:bg-transparent hover:text-red-600' onClick={()=>setFormOpen(false)}><CloseIcon/></IconButton>
        <h1 className="text-xl font-bold text-gray-800">Request an Account</h1>
        <p className="text-sm text-gray-600 mb-4" >Fill out the form to get stared with EduGrade.</p>

        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <div className="field">
            <label>School Name</label>
            <input className="rounded-md border-gray-300 p-2 focus:ring focus:ring-blue-300"
              name='school_name'
              value={client.school_name}
              onChange={handleChange}
              placeholder='Government College Ibadan' required/>
          </div>
          <div className="field">
            <label>School Email</label>
            <input type="email" className="rounded-md border-gray-300 p-2 focus:ring focus:ring-blue-300"
              value={client.school_email}
              name='school_email'
              onChange={handleChange}
              placeholder='gci@yahoomail.com' required/>
          </div>
          <div className="field">
            <label>Person of Contact</label>
            <input type="text" className="rounded-md border-gray-300 p-2 focus:ring focus:ring-blue-300"
              value={client.contact_person}
              name='contact_person'
              onChange={handleChange}
              placeholder='Admin name' required/>
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input type="tel" className="rounded-md border-gray-300 p-2 focus:ring focus:ring-blue-300"
              value={client.phone_number}
              name='phone_number'
              onChange={handleChange}
              placeholder='Admin Contact Number' required/>
          </div>
          <div className="field">
            <label>Use case</label>
            <textarea className="rounded-md border-gray-300 p-2 focus:ring focus:ring-blue-300"
              value={client.purpose}
              name='purpose'
              onChange={handleChange}
              placeholder="Tell us about your school's needs..." required></textarea>
          </div>
          <button 
            type='submit'
            disabled={isSubmitting} 
            className="w-full bg-button text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >{isSubmitting ? 'Processing...' : 'Submit Request'}</button>
        </form>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </>
        {/* <Backdrop> */}
        {isSubmitted && 
          <div className='fixed inset-0 w-full h-screen bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out backdrop-blur-sm'>
            <div className="bg-white rounded-md shadow-lg p-12 w-full max-w-lg relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modalFadeIn text-center">
              <IconButton className='absolute top-4 right-4 bg-transparent hover:text-red-500 w-fit text-black' onClick={()=>setIsSubmitted(false)}>
                <Close/>
              </IconButton>
              <div className="inline-flex items-center justify-center bg-black/50 w-16 h-16 rounded-full mb-6">
                <Check className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">You're on the List!</h3>
              <p className="text-gray-700 max-w-md mx-auto">
                Thank you for joining our waitlist. We'll keep you updated on our launch and early access opportunities.
              </p>
            </div>
          </div>
        }
    </Backdrop>
  )
}
