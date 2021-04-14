import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Products() {

    const [val, set] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').
            then((d) => set(d.data)).
            catch((e) => console.log(e.message))


    })

    return (
        <div className='container'>
            <div className='row' style={{ columnGap: '16%' }}>{val.map((i) => {


                return (
                    <div key={i.id} style={{ width: '40%' }} >
                        <Card>
                            <Card.Img variant="top" src={i.image} />
                            <Card.Body>
                                <Card.Title>{i.title}</Card.Title>
                                <Card.Text> <h3> ₹ {Math.round(i.price*75)}</h3></Card.Text>
                                <Card.Text>
                                    {i.description}
                  </Card.Text>
                                <Button variant="primary">Buy now</Button>
                            </Card.Body>
                        </Card>
                    </div>

                )

            })}</div>
        </div>
    )
}

export default Products
