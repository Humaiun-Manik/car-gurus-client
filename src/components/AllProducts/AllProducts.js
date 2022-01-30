import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './AllProducts.css';

const AllProducts = () => {

    const { services, handleBuy } = useAuth();

    return (
        <div id='service'>
            <Container>
                <div className='text-center my-5 pt-5 section-title'>
                    <h1>All Products</h1>
                </div>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {services.map((service, index) => <Col key={service._id}>
                            <Card className='single_service'>
                                <Card.Img className='img-fluid service_img' variant="top" src={service?.img} />
                                <Card.Body className='p-4 pb-3'>
                                    <Card.Title className='service_hover w-100'>
                                        <h4 className="card-title">{service?.name}</h4>
                                    </Card.Title>
                                    <Card.Text className="card-text">
                                        <p>{service?.description.slice(0, 158)}</p>
                                        <h5>Price: {service?.Price} TK</h5>
                                        <Button onClick={() => handleBuy(index)} className='book_btn'>Buy Now</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default AllProducts;