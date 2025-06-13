import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRevealOnScroll } from '@/lib/useRevealOnScroll'
import { features } from '@/lib/globalConst'

{/* Core Features Section */}
export default function Features() {

  const { sectionRef, isVisible, visibleCards } = useRevealOnScroll(features.length, 150, true)

  return (
    <section ref={sectionRef} id="features" className="py-20 px-8 md:px-4">
    <div className="container mx-auto max-w-6xl">
      <div className={`flex flex-col items-center space-y-4 mb-16 transition-all duration-1000 fade-in-up ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need in One Platform</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From student management to parent communication, EduGrade streamlines every aspect of academic
          administration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature,id)=>(
          <Card key={id}  
          className={`group feature-card relative hover:shadow-lg hover:scale-105 border-blue-100 transition-all duration-500 transform ${visibleCards.includes(id) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"} hover:scale-105 hover:-translate-y-2`}
              style={{ transitionDelay: `${id * 200}ms` }}>
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                <feature.icon className="w-6 h-6 text-blue-600 transition-colors duration-300 group-hover:text-white" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}
