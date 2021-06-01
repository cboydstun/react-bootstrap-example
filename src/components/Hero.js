import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import BG from '../bg.png'

export default function Hero() {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item className="hero-block">
                    <img
                    className="d-block w-100"
                    src={BG}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="hero-block">
                    <img
                    className="d-block w-100"
                    src={BG}
                    alt="Second slide" />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="hero-block">
                    <img
                    className="d-block w-100"
                    src={BG}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}
