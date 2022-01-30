import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Services.css';

const Services = () => {

    const { user } = useAuth();
    const [services, setServices] = useState([]);

    useEffect(() =>
        fetch('https://glacial-ridge-81046.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)))
        , []);

    const handleBuy = (index) => {
        const buyData = services[index];
        buyData.email = user.email;
        buyData.Status = "Pending";

        fetch('https://glacial-ridge-81046.herokuapp.com/addOrders', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyData)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div id='service'>
            <Container>
                <div className='text-center my-5 pt-5 section-title'>
                    <h1>Our Products</h1>
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

export default Services;