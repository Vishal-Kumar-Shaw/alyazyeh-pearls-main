import React from 'react'
import './About.css'
import Service from '../Services main/service'
import Ainfo from './Ainfo'
import Acard from './Acard'

const About = () => {
  return (
    <>
      <h1 className='about-page-title'><span>About Us</span></h1>
      {/* <Acard/> */}
      <Ainfo/>
      <Service/>
    </>
  )
}

export default About