"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import AccountRequestForm from './request-form';
import { Button } from "@/components/ui/button"

export default function Header() {

  const [menuOpen, setMenuOpen ] = useState(false);
  const [formOpen, setFormOpen ] = useState(false);

  return (
    <div className='bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b'>
      <div className="absolute w-full h-full top-0 bottom-0 left-0"></div>
      <div className='container relative mx-auto flex items-center justify-between py-4 px-6 w-full'>
        <div className="flex items-center">
          <img src="/logo.png" alt="" className="h-10" />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="absolute w-2/6 overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 h-full transform skew-x-[-37deg] translate-x-40 hidden md:block top-0 bottom-0 right-0 ">
        </div>
        <div className="md:block z-20">
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={()=>setFormOpen(true)}>Get Started</Button>
        </div>
      </div>
      
      {formOpen && <AccountRequestForm setFormOpen={setFormOpen}/>}
    </div>
  )
}
