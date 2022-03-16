import React from "react"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"
import products from "../Data/products.json"

function ProductSection(props) {
    const { addToCart } = props;
    return (
        <div>
            <h4> New Products </h4>
            <Container fluid>
                <Row>
                    {products.map((product) => { /*Cuando usamos map, siempre debe llevar key de valor unico. */
                        console.log(product)
                        const { id, title, price, description, category, image } = product
                        // en iteracion se obtiene un objeto
                        return (
                            <Card key={id} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title> {product.title} </Card.Title>
                                    <Card.Text> {product.price} </Card.Text>
                                    <Card.Text> {product.description} </Card.Text>
                                    <Badge pill bg="primary"> {product.category} </Badge>
                                </Card.Body>
                            </Card>
                        )
                    }
                    )}
                </Row>
                <Button variant="outline-dark"> View all products </Button>
            </Container>


        </div>

    )
}

export default ProductSection