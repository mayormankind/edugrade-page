import React from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Users,
  FileOutput,
  Cloud,
  LogIn,
  Database,
  Video,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/landing/HeroSection";
import FeatureSection from "@/components/landing/FeatureSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import PricingSection from "@/components/landing/PricingSection";
import FaqSection from "@/components/landing/FaqSection";
import IntegrationSection from "@/components/landing/IntegrationSection";
import Footer from "@/components/landing/Footer";
import CompanySection from "@/components/landing/CompanySection";
import ComparisonSection from "@/components/landing/ComparisonSection";

const features = [
  {
    title: "Role-Based Login",
    description: "Separate secure access for school administrators and parents with customized dashboards",
    icon: Users,
  },
  {
    title: "Student & Subject Management",
    description: "Easily manage student profiles, subjects, and class assignments in one place",
    icon: FileText,
  },
  {
    title: "Result Upload",
    description: "Save time with bulk CSV uploads or add results manually with our intuitive interface",
    icon: FileText,
  },
  {
    title: "PDF Result Download",
    description: "Parents can access and download professionally formatted academic reports anytime",
    icon: FileOutput,
  },
  {
    title: "Realtime Updates",
    description: "Instant notifications when new results are available, keeping parents informed",
    icon: Cloud,
  },
  {
    title: "Data Security",
    description: "Bank-level encryption and strict privacy controls to protect sensitive student data",
    icon: Cloud,
  },
];

const testimonials = [
  {
    quote: "EduGrade has transformed how we manage student performance. Parents love the instant access to results, and our staff saves hours each week on administrative tasks.",
    author: "Dr. Sarah Johnson",
    position: "Principal, Westfield Academy",
    image: "/placeholder.svg",
  },
  {
    quote: "As a parent of three children, I used to dread result day. Now I can track my children's progress throughout the term and provide support exactly where it's needed.",
    author: "Michael Chen",
    position: "Parent of 3 students",
    image: "/placeholder.svg",
  },
  {
    quote: "The analytics feature has helped us identify subject areas where students need additional support. It's been instrumental in raising our overall academic standards.",
    author: "Amanda Torres",
    position: "Academic Director, Springfield School",
    image: "/placeholder.svg",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    duration: "forever",
    description: "Perfect for small classes or individual educators",
    features: [
      "Up to 20 students",
      "Basic result management",
      "PDF downloads",
      "Email support",
    ],
    limitations: ["Limited analytics", "No CSV uploads", "No custom branding"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    duration: "per month",
    description: "Ideal for growing schools and academies",
    features: [
      "Up to 200 students",
      "Advanced analytics",
      "CSV bulk uploads",
      "Custom branding",
      "Priority email support",
    ],
    limitations: ["Limited API access", "Standard SLA"],
    cta: "Start 14-Day Trial",
    popular: true,
  },
  {
    name: "School",
    price: "$199",
    duration: "per month",
    description: "Complete solution for large educational institutions",
    features: [
      "Unlimited students",
      "Advanced analytics & insights",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom feature development",
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How secure is the platform?",
    answer: "EduGrade uses bank-level encryption (256-bit SSL) for all data transfers. We comply with educational data protection laws and implement strict access controls to ensure your students' information remains private and secure.",
  },
  {
    question: "Can I try before paying?",
    answer: "Absolutely! We offer a completely free tier for up to 20 students with no time limit. For larger institutions, our Pro plan comes with a risk-free 14-day trial with full functionality.",
  },
  {
    question: "How is support handled?",
    answer: "We provide email support for all plans. Pro users receive priority email support with faster response times. School plan customers enjoy dedicated account management and 24/7 phone support.",
  },
  {
    question: "Can I import data from our existing system?",
    answer: "Yes, EduGrade supports smooth transitions from most educational management systems. Our team can help with data migration, or you can use our CSV templates to import student records and historical results.",
  },
  {
    question: "How do parents access the system?",
    answer: "Parents receive secure login credentials to access only their children's results. They can view progress online or download official PDF reports anytime, anywhere.",
  },
  {
    question: "Is training provided for staff?",
    answer: "Yes, we provide comprehensive documentation, video tutorials, and live webinar training sessions. Pro and School plans include personalized onboarding sessions for your administrative team.",
  },
];

const comparisonPoints = [
  {
    manual: "Hours spent calculating and recording grades by hand",
    edugrade: "Automated calculations and instant grade processing",
  },
  {
    manual: "Physical report cards that can be lost or damaged",
    edugrade: "Digital reports accessible anytime with secure backup",
  },
  {
    manual: "Limited insights into student performance trends",
    edugrade: "Comprehensive analytics to identify improvement areas",
  },
  {
    manual: "Delayed communication with parents about results",
    edugrade: "Real-time updates and immediate parent notifications",
  },
  {
    manual: "Risk of calculation errors affecting student outcomes",
    edugrade: "Accurate, consistent grading with error prevention",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 py-3">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-bold text-2xl text-blue-600">EduGrade</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link to="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimonials
            </Link>
            <Link to="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link to="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Login
            </Button>
            <Button>Get Started Free</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeatureSection features={features} />

        {/* Comparison Section */}
        <ComparisonSection comparisonPoints={comparisonPoints} />

        {/* Testimonial Section */}
        <TestimonialSection testimonials={testimonials} />

        {/* Integration Section */}
        <IntegrationSection />

        {/* Pricing Section */}
        <PricingSection pricingTiers={pricingTiers} />

        {/* FAQ Section */}
        <FaqSection faqs={faqs} />

        {/* Company Section */}
        <CompanySection />

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Result Management Effortless?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join thousands of educational institutions that trust EduGrade to streamline their academic reporting.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700/30">
                Request a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;