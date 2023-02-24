import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './process.css'

const CardP=(props)=> {
  return (
      <Card className='card1'>
            <Card.Img variant="top" src={props.img} className='images'/>
            <Card.Body>
            <Card.Title className='title'>{props.name}</Card.Title>
            <Card.Text className='parC'>{props.para}
            </Card.Text>
            <Button variant="primary" className='btn'>FIND OUT MORE</Button>
            </Card.Body>
      </Card>
  );
}


export default CardP; 