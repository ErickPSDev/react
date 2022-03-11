import React from "react"
import './Card.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function MyCard(props){
	console.log(props)
    return (
		<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img}/>
  <Card.Body>
    <Card.Title> {props.name} </Card.Title>
    <Card.Text>
		{props.description}
    </Card.Text>
	<Card.Text >
		{props.price}
	</Card.Text>
    <Button variant="primary">Buy Now</Button>
  </Card.Body>
</Card>
	)
}

export default MyCard