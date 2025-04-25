import React from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import FeaturedDonations from '../components/FeaturedDonations'
import ShortAbout from '../components/ShortAbout'
import FAQ from '../components/FAQ'
import QuickContact from '../components/QuickContact'
import BackToTopButton from '../components/BackToTopButton'

const HomePage = () => {
  return (
    <>
       <Hero />
       <HowItWorks />
       <FeaturedDonations />
       <ShortAbout />
       <FAQ />
       <QuickContact />
       <BackToTopButton />
    </>
  )
}

export default HomePage