import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() =>
        fetch('https://glacial-ridge-81046.herokuapp.com/addreview')
            .then(res => res.json())
            .then(data => setReviews(data))
        , []);

    return (
        <div className="review-header">
            <Container>
                <h1 className="text-center py-5">Our Clints Reviews</h1>
                <Row>
                    {
                        reviews.map((review, index) =>
                            <Col key={index} sm={12} md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{review?.DisplayName}
                                        </Card.Title>
                                        <Card.Text>
                                            <p className="card-text">{review?.description}</p>
                                            <Rating className='text-warning mt-1'
                                                initialRating={review?.review}
                                                readonly
                                                emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                                fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                            />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;