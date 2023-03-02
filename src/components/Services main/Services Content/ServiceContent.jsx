import React from 'react'
import './ServiceContent.css';

const ServiceContent = (props) => {
  return (
    <div className='bg-home-content'>
        <div className='home-content-first'>
            <h2>{props.heading}</h2>
            <p>{props.content}</p>
            <br/><br/>
            <a className="home-link" href='#'>Explore</a>

        </div>
        <div className='home-content-second'>
            <img src={props.image} alt="Image"/>
        </div>
    </div>
  )
}

export default ServiceContent