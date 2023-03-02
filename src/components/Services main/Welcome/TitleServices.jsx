import React from 'react';
import './TitleServices.css';

const TitleServices = (props) => {
  return (
    <div className='title-main-home'>
        <h1 className='homepage-main-heading'><span>{props.title}</span></h1>
    </div>
  )
}

export default TitleServices;