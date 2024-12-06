'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "This program transformed my approach to leadership. I'm now more confident and effective in my role.",
    author: "Sarah Johnson",
    title: "Marketing Director",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The skills I learned here have been invaluable in building and managing high-performing teams.",
    author: "Michael Chen",
    title: "Tech Lead",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "A game-changer for my career. The program provided practical tools I use every day.",
    author: "Emily Rodriguez",
    title: "HR Manager",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">What Our Participants Say</h2>
      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <p className="text-xl mb-4 text-gray-600 italic">"{testimonials[currentIndex].quote}"</p>
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button 
          onClick={prevTestimonial} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-md focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button 
          onClick={nextTestimonial} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-md focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  )
}

