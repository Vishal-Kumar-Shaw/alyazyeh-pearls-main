import React from 'react'
import HomeContent from '../Home main/Content Card/HomeContent'
import img1 from './Images/1.jpg';
import img2 from './Images/2.jfif';
import img3 from './Images/3.jpg';
import Title from '../Home main/Welcome/Title';
import FirstDiv from './FirstDiv';
import Values from './Values';
import AboutIcons from './AboutIcons';

const About = () => {
  return (
    <>
      <Title title="About Us"/>
      <FirstDiv/>
      <HomeContent image = {img1} heading="OUR VISION" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe."/>
      <HomeContent image = {img2} heading="OUR MISSION" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe."/>
      <HomeContent image = {img3} heading="OUR PHILOSOPHY" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe."/>
      <Values id="Value-Title"/>
      <AboutIcons/>
    </>
  )
}

export default About