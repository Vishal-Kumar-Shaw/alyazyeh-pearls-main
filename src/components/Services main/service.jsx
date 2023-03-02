import React from 'react'
import TitleServices from './Welcome/TitleServices'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import ServiceContent from './Services Content/ServiceContent'
import Enquire from '../common main/Enquire/Enquire'



const Service = () => {
  return (
    <div className='divBody'>
      <TitleServices title="Our Services"/>
      <ServiceContent heading="IMPORT-EXPORT" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." image={img1} />
      <hr/>
      <ServiceContent heading="CUTTING DIAMONDS" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." image={img2} />
      <hr/>
      <ServiceContent heading="DIAMOND-DESIGN" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." image={img3} />
      
        
    </div>
  )
}

export default Service