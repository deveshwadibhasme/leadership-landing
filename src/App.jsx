import Header from './components/Header'
import WhyLeadershipMatters from './components/WhyLeadershipMatters'
import AboutProgram from './components/AboutProgram'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'

import './App.css'

export default function App(){
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <Header />
      <WhyLeadershipMatters />
      <AboutProgram />
      {/* <Testimonials /> */}
      <FinalCTA />
    </main>
  )
}