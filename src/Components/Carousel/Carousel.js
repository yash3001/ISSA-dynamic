import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Carousel1 extends Component{
    render(){
        return(
            <div>
                <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://4.bp.blogspot.com/-DUKlvGnEofQ/VzDzJ1-I3XI/AAAAAAAAX3s/UKJ1GTxLEAMzW7uuEzeqpX0QShqAG58GwCLcB/s1600/captain-america-civil-war-picture-wallpaper.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://pm1.narvii.com/6131/3a8667909fc9808f18d4ec9e0995087c7fbc03eb_hq.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/ca/a2/65/caa2654e79e2dc88c6a3c18e1a353452.jpg"
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
}
export default Carousel1;