import React from 'react';
import './Title.css';

const Title = (props) => {
  return (
    <div className='title'>
        <h1><span>{props.title}</span></h1>
    </div>
  )
}

export default Title