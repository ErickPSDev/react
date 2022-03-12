import React from "react"
import Navbar from '../Components/Navbar'
import GreetingSection from "../Components/GreetingSection"
import CategorySection from "../Components/CategorySection"
import ProductSection from "../Components/ProductSection"
import Container from "react-bootstrap/Container"
function Home() {
    return (
        <div id='App'>
            <Navbar />
            <Container>
                <GreetingSection />
                <CategorySection />
                <ProductSection />
            </Container>
        </div>
    )
}

export default Home
