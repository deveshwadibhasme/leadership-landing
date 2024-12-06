'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Leadership Journey Starts Here. Take the First Step Today!
      </motion.h2>
      <motion.button 
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="https://forms.gle/vvRtpdF5WwiYn1Qw8" target='_blank'>Apply Now</a>
      </motion.button>
    </section>
  )
}

