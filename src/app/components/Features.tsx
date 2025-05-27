import React from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  Shield,
  BarChart3,
  Download,
} from "lucide-react"

{/* Core Features Section */}
export default function Features() {

  return (
    <section id="features" className="py-20 px-8 md:px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need in One Platform</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From student management to parent communication, EduGrade streamlines every aspect of academic
          administration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="border-blue-100 hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-lg">Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Intuitive interface to manage students, classes, subjects, and academic terms with ease.
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-100 hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-lg">Automated Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Smart grade calculations, GPA computation, and instant report card generation.
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-100 hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-lg">Parent Portal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Secure access for parents to view their child's progress, attendance, and reports.
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-100 hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-lg">Printable Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Beautiful, professional report cards ready for printing or digital distribution.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}
