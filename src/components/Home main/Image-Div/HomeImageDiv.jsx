import React from 'react'
import './HomeImageDiv.css'
const HomeImageDiv = (props) => {
  return (
    <div className='bg-home-image-container'>
        <img src={props.image1} alt="img1" className='child-img'/>
        <img src={props.image2}  alt="img2" className='child-img'/>
        <img src={props.image3}  alt="img3" className='child-img'/>

    </div>
  )
}

export default HomeImageDiv