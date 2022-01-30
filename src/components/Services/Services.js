import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

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
                        {packages.map(pack => <Col key={pack._id}>
                            <Card className='single_service'>
                                <Card.Img className='img-fluid service_img' variant="top" src={pack.photos.thumbnail} />
                                <Card.Body className='p-4 pb-3'>
                                    <Card.Title className='service_hover w-100'>
                                        <div>
                                            <h5>{pack.title}</h5>
                                        </div>
                                    </Card.Title>
                                    <Card.Text>
                                        <button href="#" className="btn btn-outline-primary" onClick={() => handleBuy(index)} >Buy Now</button>
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