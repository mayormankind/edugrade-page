import React from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

{/* Pricing Section */}
export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-8 md:px-4 bg-gray-50">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600">Choose the plan that fits your school's needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-blue-100">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Starter</CardTitle>
            <CardDescription>Perfect for small schools</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">$29</span>
              <span className="text-gray-600">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Up to 100 students</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Basic report templates</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Parent portal access</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Email support</span>
              </li>
            </ul>
            <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
          </CardContent>
        </Card>

        <Card className="border-blue-500 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-blue-600 text-white">Most Popular</Badge>
          </div>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Pro</CardTitle>
            <CardDescription>Ideal for growing schools</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">$79</span>
              <span className="text-gray-600">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Up to 500 students</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Custom report templates</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Bulk operations</span>
              </li>
            </ul>
            <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Enterprise</CardTitle>
            <CardDescription>For large institutions</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">Custom</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Unlimited students</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>White-label solution</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>API access</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Dedicated support</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Custom integrations</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-6 border-blue-200 hover:bg-blue-50">
              Contact Sales
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}
