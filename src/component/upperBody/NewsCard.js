import React from 'react'
import { Card, CardDeck } from 'react-bootstrap';

export default ({ title }) => {
    console.log(title)
    return (
        <div>
            <CardDeck>
                <Card className='text-center'>
                    <Card.Body>
                        <Card.Title>News 1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facilis odit necessitatibus blanditiis illum nemo dolorem, repellat dolorum dolores debitis, nulla unde ducimus atque, eum voluptas minus quos itaque ullam?
                            </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}
