import React from 'react';
import "./info.scss"
import Landing from '../InfoSection/landin.svg'

const InfoSection = () => {
  return (
   <div className='info-container'>
      <div className='info-slogan'>
      <h3>QR Codes Reimagined: One App, Countless Possibilities</h3>
      <p>Step into a realm of QR code magic that's anything but ordinary! Our app simply turns information into QR codes. Generate QR codes for your wildest ideas – from creating pets profile cards to events.</p>
      <button className='get-start'>Get Started</button>

      </div>
      <div className='info-img'>
      <img src={Landing} alt='Landing'></img>
      </div>  
   </div>
  )
}

export default InfoSection
