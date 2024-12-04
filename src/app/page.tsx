import React from 'react'
import HeroSection from '../components/Hero'
import About from '../components/About'
// import Companies from '@/components/Companies'
import PricingSection from '@/components/Price'

function page() {
  return (
    <div>
      <HeroSection />
      <About />
      <PricingSection />
    </div>
  )
}

export default page