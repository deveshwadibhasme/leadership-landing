'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, BookOpen } from 'lucide-react'

const programFeatures = [
  {
    title: 'Personal Growth',
    description: 'Build confidence and resilience to face any challenge.',
    icon: TrendingUp,
  },
  {
    title: 'Team Success',
    description: 'Learn to create cohesive, high-performing teams.',
    icon: Users,
  },
  {
    title: 'Skill Development',
    description: 'Gain tangible, actionable leadership skills.',
    icon: BookOpen,
  },
]

export default function AboutProgram() {
  return (
    <section className="container mx-auto px-4 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">About the Program</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {programFeatures.map((feature, index) => (
            <motion.div 
            key={feature.title}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0.5, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8}}
          >
            <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

