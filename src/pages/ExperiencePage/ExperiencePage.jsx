import React, { useEffect } from 'react'
import ExperienceLayout from '../../components/Experiences/ExperienceLayout/ExperienceLayout';

const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div>
      <ExperienceLayout/>
    </div>
  )
}

export default ExperiencePage;