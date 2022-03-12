import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Card.scss'
import Badge from 'react-bootstrap/Badge'

function MyCard(props){
  const [itemCount, setItemCount] = React.useState(0) // Var y function Hook
  function addToCart(){
    console.log('Listening click')
    setItemCount(itemCount + 1)
  }
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
    <Button onClick={addToCart} variant="primary">Add to Cart</Button>
    <div > Carrito: {itemCount} </div>
  </Card.Body>
</Card>
	)
}

export default MyCard