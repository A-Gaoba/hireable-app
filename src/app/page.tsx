import React from 'react'
import HeroSection from '../components/Hero'
import About from '../components/About'
// import Companies from '@/components/Companies'
import PricingSection from '@/components/Price'
import Services from '@/components/Services'
import TestimonialSection from '@/components/Testimonial'

function page() {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <PricingSection />
      <TestimonialSection />
    </div>
  )
}

export default page