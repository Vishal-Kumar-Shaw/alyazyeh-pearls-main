import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cards = (props) => {
  return (
    <Card className='cardBody1' >
    <Card.Body >
      <Card.Title className='title1'>{props.title}</Card.Title>
      <Card.Text className='cardPara'>{props.para}
      </Card.Text>
      {/* <div className='buttonS'><Button variant="primary" className='btnS'>Explore</Button></div> */}
    </Card.Body>
  </Card>
  )
}

export default Cards;