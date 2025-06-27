import React from 'react'
import Navbar from '@/components/Navbar'
import ProfileAndBio from '@/components/ProfileAndBio'
import ProjectsSection from '@/components/ProjectsSection'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <ProfileAndBio />
      <ProjectsSection />
    </div>
  )
}

export default page