import React from "react"
import Badge from "react-bootstrap/Badge"


function CategorySection() {
    return (
        <div>
            <h4>Categories </h4>
            <Badge pill bg="primary">
                Men's Clothing
            </Badge>{' '}
            <Badge pill bg="primary">
                Jewelry
            </Badge>{' '}
            <Badge pill bg="primary">
                Electronics
            </Badge>{' '}
            <Badge pill bg="primary">
                Women's Clothing
            </Badge>{' '}

        </div>
    )
}

export default CategorySection