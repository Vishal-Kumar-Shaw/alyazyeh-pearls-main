import React from 'react'
import Card from 'react-bootstrap/Card';


const Cards = (props) => {
  return (
    <Card className={props.className} >
      <Card.Body >
        <Card.Title className='titleJ'>{props.title}</Card.Title>
        <hr className='lineJ'/>
        <Card.Text className='cardParaJ'>{props.para}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards;