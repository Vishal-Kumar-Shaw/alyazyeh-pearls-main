import React from 'react'
import Cards from './card'
import Images from './image'
import './service.css'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import Enquire from './Enquire'


const Service = () => {
  return (
    <div className='divBody'>

        <div className='comp'>
        <Cards
        title='IMPORT-EXPORT'
        para='We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-East. Our partners and customers are present across the globe. We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-East. Our partners and customers are present across the globe. '/>
        <Images
        img={img1}/>
        </div>

        <hr className='hLine'/>
        
        <div className='comp'>
        <Images
        img={img2}/>
        <Cards
        title='CUTTING DIAMONDS'
        para='We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-East. Our partners and customers are present across the globe. We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-East. Our partners and customers are present across the globe. '/>
        </div>

        <hr className='hLine'/>

        <div className='comp'>
        <Cards
        title='DIAMOND-DESIGN'
        para='We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-East. Our partners and customers are present across the globe. We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-East. Our partners and customers are present across the globe. '/>
        <Images
        img={img3}/>
        </div>
        <Enquire/>
        
    </div>
  )
}

export default Service