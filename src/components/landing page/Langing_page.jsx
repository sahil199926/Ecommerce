
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {useEffect} from 'react';

import Detail from './Details/Detail';
import Products from './products/Products';
function Langing() {

    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/02/40/40/0240407fcd0411820fc1858ae76cfbd3.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://www.thefashionisto.com/wp-content/uploads/2014/01/arthur_gasjeans000.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}> 
                    <img
                        className="d-block w-100"
                        src="https://assets.vogue.com/photos/5e6c329ebe50a80008b197d7/4:3/w_1324,h_993,c_limit/0316-VO-VIEW10-01.jpg"
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

export default Langing;
