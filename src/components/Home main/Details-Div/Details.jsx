import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import img6 from '../Home Images/img4.avif'

const Details = () => {
  return (
    <div style={{display:'flex', marginInline:'100px', height:'350px'}}>
        <Comp1 style={{width:'50%'}} title="ALYAZYEH PEARLS OUR GALLERY" content="Discover the state-of-the-art diamond manufacturing processes at Goldiama."/>
        <Comp2 imagelast={img6}/>
    </div>
  )
}

export default Details