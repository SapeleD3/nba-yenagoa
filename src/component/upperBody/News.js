import React, { Component } from 'react'
import './members.css'
import { Card, CardDeck } from 'react-bootstrap';

export class News extends Component {
    state = {
        news: []
    }

    // componentDidMount() {
    //     fetch('https://newsapi.org/v2/everything?q=law&from=2019-08-21&sortBy=publishedAt&apiKey=ff5bee04c8214b358ffe9cca1e685e8f')
    //         .then(res => res.json())
    //         .then(news => {
    //             // console.log(news.articles[0].title)
    //             if (news.status === "ok") {
    //                 this.setState({ news: news.articles[0] })
    //             } else {
    //                 this.setState({ message: 'Error no NEws recieved' })
    //             }
    //         })
    // }

    render() {
        return (
            <div>
                <CardDeck>
                    <Card className='text-center cards'>
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
                    <Card className='text-center cards'>
                        <Card.Body>
                            <Card.Title>News 2</Card.Title>
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
}

export default News
