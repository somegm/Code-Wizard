import React from 'react';
import { InfoContainer, InfoC1,InfoSlogan,InfoDesc, InfoIMG } from './InfoSectionElements';
import img from "../../images/pets.jpg"


const InfoSection = () => {
  return (
    <InfoContainer>
    <InfoC1>
        <InfoSlogan>Slogan</InfoSlogan>
        <InfoDesc>desc</InfoDesc>
        <InfoIMG src={img} style={{ width: 200, paddingLeft: 1000 }}>
          
         </InfoIMG>

    </InfoC1>   
    </InfoContainer>
  )
}

export default InfoSection
