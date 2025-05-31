import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { db } from '@/firebase/firebaseConfig'
import { useToast } from '@/hooks/use-toast'
import { addDoc, collection } from 'firebase/firestore'
import { Check, Clock, Eye, Mail, MapPin, Phone, Shield } from 'lucide-react'
import React, { useState } from 'react'
import { Backdrop } from './Backdrop'

{/* Contact Section */}
export default function Contact() {

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
      });
      setIsSubmitting(false);

    } catch (error:any) {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: 'destructive'
      })
    }
  }

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
              <a href="mailto:info@edugrade.com">
                <span className="text-gray-600">info@edugrade.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <a href="tel:+2347040829383">
                <span className="text-gray-600">+234 (70) 40829383 </span>
              </a>
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <Input onChange={handleChange} name='contact_person' placeholder="Enter your Name" required/>
                <Input 
                  value={client.school_name}
                  onChange={handleChange}
                  name='school_name' 
                  placeholder="School Name" 
                  required
                  />
              </div>
              <Input 
                value={client.phone_number}
                onChange={handleChange}
                name='phone_number' 
                placeholder="Phone Number" 
                required
              />
              <Input 
                type="email"
                value={client.school_email}
                onChange={handleChange}
                name='school_email' 
                placeholder="Email Address" 
                required
              />
              <Textarea 
                value={client.purpose}
                onChange={handleChange}
                name='purpose' 
                placeholder="Tell us about your school's needs..." 
                required
              />
              <Button
                type='submit'
                disabled={isSubmitting} 
                className="w-full bg-button text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >{isSubmitting ? 'Processing...' : 'Book Demo Call'}</Button>
            </form>
          </CardContent>
        </Card>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    </div>

  </section>
  )
}
