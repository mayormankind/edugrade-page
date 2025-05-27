import React from 'react'
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

{/* Hero Section */}
export default function HeroSection() {
  return (
    <section className="py-20 px-4">
    <div className="container mx-auto text-center max-w-4xl">
      <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 animate-bounce-slow">Trusted by 500+ Schools Worldwide</Badge>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight hero-title">
        Revolutionize How Your School <span className="text-blue-600 gradient-text">Manages Results</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed hero-subtitle">
        EduGrade is the cloud-based school management platform that helps schools manage students, enter scores, and
        generate automated, printable report cards in minutes, not hours.
      </p>
      <div className="inline-flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
          Book a Demo <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
        <Button size="lg" variant="outline" className="text-black border-2 text-lg px-8 py-3 border-blue-200 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Get Started Free
        </Button>
      </div>
      <div className="mt-12 hero-image">
        <Image
          src="/edugrade.PNG"
          alt="EduGrade Dashboard Preview"
          width={800}
          height={400}
          className="rounded-xl shadow-2xl mx-auto border transition-all duration-700 hover:scale-105 hover:shadow-3xl"
        />
      </div>
    </div>
  </section>
  )
}
