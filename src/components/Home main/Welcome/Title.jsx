import React from 'react';
import './Title.css';

const Title = (props) => {
  return (
    <div className='title-main-home'>
        <h1 className='homepage-main-heading'><span>{props.title}</span></h1>
    </div>
  )
}

export default Title