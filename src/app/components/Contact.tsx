import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Clock, Eye, Mail, MapPin, Phone, Shield } from 'lucide-react'
import React from 'react'

{/* Contact Section */}
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 md:px-4">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your School?</h2>
        <p className="text-xl text-gray-600">Get started with EduGrade today or schedule a personalized demo</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">info@edugrade.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">+234 (70) 40829383 </span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600">Ibadan, Nigeria</span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-gray-900 mb-4">Why Choose EduGrade?</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Save 90% of time on result processing</span>
              </li>
              <li className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Bank-level security for student data</span>
              </li>
              <li className="flex items-center">
                <Eye className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-gray-600">Real-time parent engagement</span>
              </li>
            </ul>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className='text-2xl md:text-3xl'>Schedule a Demo</CardTitle>
            <CardDescription>See how EduGrade can transform your school's result management</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="School Name" />
              <Input type="email" placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              <Textarea placeholder="Tell us about your school's needs..." />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Demo Call</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}
