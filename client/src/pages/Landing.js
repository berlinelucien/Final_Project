import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import HeroHeader from '../components/HeroHeader/HeroHeader';
import ReferenceLayout from '../components/ReferenceCard/ReferenceLayout';
const Landing = () => {
  return (
      <div>
          <NavBar />
          <HeroHeader
              header="Reference tool for students"
              summary="Addressing the lack of reference photos of dermatological conditions on skin of color. We help nursing and medical students be able to identify how skin conditions look on black/brown skin."
          />
         <ReferenceLayout />
      </div>
  )
}

export default Landing