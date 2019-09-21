import React from 'react'
import { Carousel, Jumbotron, Container, Button, Row, Col, Card, ListGroup } from 'react-bootstrap'
import './jumbo.css'

const Jumbo = () => {
    return (
        <div>
            <Carousel className='car'>
                <Carousel.Item >
                    <Jumbotron className='car'>
                        <Container className='text-center'>
                            <h1>Top Legal News</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quis, deleniti nihil expedita sunt exercitationem nemo debitis commodi optio non ad aspernatur quisquam veniam similique eveniet! Quo tempore ipsam fuga.
                            </p>
                            <Button variant="outline-success" className="text-center">Learn More</Button>
                        </Container>
                    </Jumbotron>
                </Carousel.Item>
                <Carousel.Item>
                    <Jumbotron className='car'>
                        <Container className='text-center'>
                            <h1>NBA Conference 2019</h1>
                            <p>
                                The NBA Annual General Conference presents a unique yearly opportunity for legal practitioners to interrogate the very essence of the profession and share latest knowledge and innovative ways of delivering effective solutions to clients and the immediate environment in
                            </p>
                            <Button variant="outline-success" className="text-center">Read More</Button>
                        </Container>
                    </Jumbotron>
                </Carousel.Item>
                <Carousel.Item>
                    <Jumbotron className='car'>
                        <Container className='text-center'>
                            <h1>NBA Membership</h1>
                            <p>
                                Connect with other legal professionals across the country to share information and best practices. Member Groups include more than 3,604 committees that produce valuable resources, newsletters, webinars, teleconferences and so much more!
                            </p>
                            <p className='font-italic text-info'>"The opportunity to network with national experts on cutting edge issues makes membership a true value." - Tom Bolt </p>
                            <Button variant="outline-success" className="btn peach-gradient text-center">Join Now</Button>
                        </Container>
                    </Jumbotron>
                </Carousel.Item>
            </Carousel>
            {/* <Card style={{ width: '18rem' }}>
                <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card> */}
        </div>
    )
}

export default Jumbo
