import React from 'react'
import './members.css'
import { Jumbotron, Container, Button } from 'react-bootstrap'

const Membership = () => {
    return (
        <div>
            <Jumbotron className='mem' fluid>
                <Container className='bg-text text-center'>
                    <h1>Become A Member</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quis, deleniti nihil expedita sunt exercitationem nemo debitis commodi optio non ad aspernatur quisquam veniam similique eveniet! Quo tempore ipsam fuga.
                    </p>
                    <Button variant="outline-success" className="text-center">Learn More</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Membership
