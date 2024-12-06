'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Users, Lightbulb, Clock, PieChart } from 'lucide-react'

const skills = [
  { name: 'Communication', icon: MessageCircle },
  { name: 'Team Building', icon: Users },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Patience', icon: Clock },
  { name: 'Conflict Resolution', icon: PieChart },
]

export default function WhyLeadershipMatters() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Why Leadership Matters</h2>
      <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
        Leadership is the catalyst that transforms individual potential into collective success. It shapes the culture, drives innovation, and empowers teams to achieve extraordinary results.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <skill.icon className="w-16 h-16 text-blue-600 mb-4" 
            onMouseEnter={(e) => {
              e.target.classList.add('scale-110')
            }}
            onMouseLeave={(e) => {
              e.target.classList.remove('scale-110')
            }}
            />
            <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

