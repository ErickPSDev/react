import React from "react"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"

function ProductSection() {
    return (
        <div>
            <h4> Products </h4>
            <Container fluid>
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/mockup-white-tshirt-blank-shirt-template-1178164783" />
                        <Card.Body>
                            <Card.Title>DANVOUY Womens T-shirt Casual Cotton Short</Card.Title>
                            <Card.Text>
                                $12.99
                            </Card.Text>
                            <Badge pill bg="primary">
                                Women's Clothing
                            </Badge>{' '}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/mockup-white-tshirt-blank-shirt-template-1178164783" />
                        <Card.Body>
                            <Card.Title>DANVOUY Womens T-shirt Casual Cotton Short</Card.Title>
                            <Card.Text>
                                $12.99
                            </Card.Text>
                            <Badge pill bg="primary">
                                Women's Clothing
                            </Badge>{' '}
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/mockup-white-tshirt-blank-shirt-template-1178164783" />
                        <Card.Body>
                            <Card.Title>DANVOUY Womens T-shirt Casual Cotton Short</Card.Title>
                            <Card.Text>
                                $12.99
                            </Card.Text>
                            <Badge pill bg="primary">
                                Women's Clothing
                            </Badge>{' '}
                        </Card.Body>
                    </Card>
                </Row>
                <Button variant="outline-dark"> View all products </Button>
            </Container>


        </div>

    )
}

export default ProductSection