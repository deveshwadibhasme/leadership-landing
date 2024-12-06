'use client'

import { motion } from 'framer-motion'
import logo from '../assets/our-logo.png'

export default function Header() {



  return (
    <header className="container mx-auto px-4 py-16 text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <img src={logo} alt="Be a Leader" className="relative -top-16 left-2 w-24 md:w-32 h-14 md:h-20 img-circle" />
        Do You Have What It Takes to Lead?
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl mb-8 text-gray-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Effective Communication • Conflict Resolution • Team Building • Patience • Problem Solving
      </motion.p>
      <motion.button 
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
       <a href="https://forms.gle/vvRtpdF5WwiYn1Qw8" target='_blank'> Join the Leadership Journey Now</a>
      </motion.button>
    </header>
  )
}

