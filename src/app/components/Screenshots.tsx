import React from 'react'
import Image from "next/image"
import Link from "next/link"
{/* Screenshots Section */}

export default function Screenshots() {
  return (
    <section className="py-20 px-8 md:px-4 bg-gray-50">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16 fade-in-up">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">See EduGrade in Action</h2>
        <p className="text-xl text-gray-600">Beautiful, intuitive interfaces designed for educators and parents</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className='fade-in-left'>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h3>
          <p className="text-gray-600 mb-6">
            Manage your entire school's academic data from one central location. Add students, input scores, and
            generate reports with just a few clicks.
          </p>
          <Image
            src="/edugrade.PNG?height=300&width=500"
            alt="Admin Dashboard Interface"
            width={500}
            height={300}
            className="rounded-lg shadow-lg border"
          />
        </div>

        <div className='fade-in-right'>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Report Card View</h3>
          <p className="text-gray-600 mb-6">
            Professional, customizable report cards that reflect your school's branding and academic standards.
            Print-ready in seconds.
          </p>
          <Image
            src="/edugrade.PNG?height=300&width=500"
            alt="Report Card Preview"
            width={500}
            height={300}
            className="rounded-lg shadow-lg border"
          />
        </div>
      </div>
    </div>
  </section>
  )
}
