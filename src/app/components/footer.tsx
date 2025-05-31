import { BookOpen } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Footer() {
  return (
    // <div className='flex w-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 py-12'>
    <div className='flex w-full text-white bg-gray-900 py-12'>
      <div className="container flex mx-auto flex-col py-4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EduGrade</span>
            </div>
            <p className="text-gray-400">
              Revolutionizing school management with intelligent automation and beautiful design.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg mb-4 font-semibold">Product</h2>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Security</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Integrations</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg mb-4 font-semibold">About</h2>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">Company</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Team</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg mb-4 font-semibold">Follow us</h2>
            <ul className="space-y-2 text-gray-400">
              <Link href="/" className='hover:text-gray-300'>Facebook</Link>
              <Link href="/" className='hover:text-gray-300'>Twitter</Link>
              <Link href="/" className='hover:text-gray-300'>Instagram</Link>
              <Link href="/" className='hover:text-gray-300'>LinkedIn</Link>
            </ul>
          </div> */}
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8">
          <p className="text-gray-100">&copy; {new Date().getFullYear()} EduGrade. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
