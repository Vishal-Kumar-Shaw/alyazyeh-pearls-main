import React from 'react'
import './TripleDiv.css'
const TripleDiv = (props) => {
  return (
    <div className='home-triple-bg'>
        <div  className='child-triple-div'>
            <img src={props.image1} alt="image1"/>
        </div>
        <div className='child-triple-div'>
            <p>{props.content}</p>
        </div>
        <div className='child-triple-div'>
        <img src={props.image2} alt="image2"/>

        </div>
    </div>
  )
}

export default TripleDiv