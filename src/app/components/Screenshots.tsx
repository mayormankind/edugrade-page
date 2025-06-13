import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { screenshots } from '@/lib/globalConst'
import { useRevealOnScroll } from '@/lib/useRevealOnScroll'
{/* Screenshots Section */}

export default function Screenshots() {

    const { sectionRef, isVisible, visibleCards } = useRevealOnScroll(screenshots.length, 150, true)
  
  return (
    <section ref={sectionRef} className="py-20 px-8 md:px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div 
        // className="text-center mb-16 fade-in-up"
        className={`flex flex-col items-center space-y-4 mb-16 transition-all duration-1000 fade-in-up ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See EduGrade in Action</h2>
          <p className="text-xl text-gray-600">Beautiful, intuitive interfaces designed for educators and parents</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {screenshots.map((screenshot,id)=>(
            <div key={id} 
              // className='fade-in-left'
              className={`group hover:shadow-lg hover:scale-105 transition-all duration-500 transform ${visibleCards.includes(id) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"} hover:scale-105 hover:-translate-y-2`}
              style={{ transitionDelay: `${id * 200}ms` }}
              >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{screenshot.title}</h3>
              <p className="text-gray-600 mb-6">{screenshot.description}</p>
              <Image
                src={`${screenshot.image}?height=300&width=500`}
                alt={`${screenshot.title} Interface`}
                width={500}
                height={300}
                className="rounded-lg shadow-lg border"
              />
            </div>
          ))}

          {/* <div className='fade-in-right'>
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
          </div> */}
        </div>
      </div>
  </section>
  )
}
