import React from 'react'
import './ThirdDiv.css'

const ThirdDiv = (props) => {
  return (
    <div className='third-main-div'>
        <h1 className='third-div-h1' id='second-third-div'>{props.title}</h1>
        <div>
        <p>{props.content}</p>
        </div>
       
    </div>
  )
}

export default ThirdDiv