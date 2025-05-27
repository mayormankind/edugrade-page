"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import TestimonialSection from "./components/TestimonialSection";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Screenshots from "./components/Screenshots";

const Home = () => {

  const testimonials = [
    {
      quote: "EduGrade has transformed how we manage student performance. Parents love the instant access to results, and our staff saves hours each week on administrative tasks.",
      author: "Dr. Sarah Johnson",
      position: "Principal, Westfield Academy",
      image: "/1.jpg",
    },
    {
      quote: "As a parent of three children, I used to dread result day. Now I can track my children's progress throughout the term and provide support exactly where it's needed.",
      author: "Michael Chen",
      position: "Parent of 3 students",
      image: "/2.jpg",
    },
    {
      quote: "The analytics feature has helped us identify subject areas where students need additional support. It's been instrumental in raising our overall academic standards.",
      author: "Amanda Torres",
      position: "Academic Director, Springfield School",
      image: "/3.jpg",
    },
    {
      quote: "As a parent of three children, I used to dread result day. Now I can track my children's progress throughout the term and provide support exactly where it's needed.",
      author: "Michael Chen",
      position: "Parent of 3 students",
      image: "/1.jpg",
    },
    {
      quote: "The analytics feature has helped us identify subject areas where students need additional support. It's been instrumental in raising our overall academic standards.",
      author: "Amanda Torres",
      position: "Academic Director, Springfield School",
      image: "/2.jpg",
    },
  ];

  const faqs = [
    {
      question: "What is EduGrade all about?",
      answer:
        "EduGrade is an online system that helps schools manage student records, calculate grades, and create clear, professional report cards that parents can easily access online.",
    },
    {
      question: "Who can use EduGrade?",
      answer:
        "EduGrade is made for schools — from nursery to primary to secondary. School admins use it to manage students, teachers, classes, and results. Parents use it to view their child's report card securely online.",
    },
    {
      question: "Do parents need to create an account?",
      answer:
        "No, parents don't need to create an account. Schools provide a secure login link where parents can simply enter their child's registration number and surname to access the report card.",
    },
    {
      question: "Is it safe to use EduGrade?",
      answer:
        "Yes! EduGrade keeps all student and school data safe with strong security protections. Only authorized people (like the school admin or the child's parents) can access the right information.",
    },
    {
      question: "Can EduGrade work for any school?",
      answer:
        "Yes! EduGrade is built as a flexible system where each school gets its own secure space to manage students and results. Whether you run a small private school or a large institution, EduGrade fits your needs.",
    },
    {
      question: "Do I need special skills to use EduGrade?",
      answer:
        "Not at all! EduGrade is designed to be easy and friendly. If you can use basic online tools, you can use EduGrade. We also provide helpful guides and support if you ever need help.",
    },
    {
      question: "Can we import our existing student records?",
      answer:
        "Yes! You can easily upload your current student list into EduGrade using our templates or with the help of our team. We're here to make sure your switch is smooth and stress-free.",
    },
    {
      question: "What if we need help?",
      answer:
        "We've got you covered! Our support team is ready to assist by email, chat, or phone. We also provide training materials and demos to help you and your staff get started confidently.",
    },
  ];
  
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all elements with fade-in-up class
    const elements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen relative w-full overflow-hidden">
      <HeroSection/>
      <Features/>
      <Screenshots/>
      <TestimonialSection testimonials={testimonials}/>
      <Pricing/>
      <Faqs faqs={faqs}/>
      <Contact/>
    </div>
  );
};

export default Home;
