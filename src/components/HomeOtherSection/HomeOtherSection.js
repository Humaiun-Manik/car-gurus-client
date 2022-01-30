import React from 'react';
import './HomeOtherSection.css'
import counterOne from './../../assets/images/counter-1.png';
import counterTwo from './../../assets/images/counter-2.png';
import counterThree from './../../assets/images/counter-3.png';
import counterFour from './../../assets/images/counter-4.png';
import { Col, Container, Row } from 'react-bootstrap';

const HomeOtherSection = () => {
    return (
        <div className="counter-container">
            <div className="counter-section">
                <Container>
                    <Row>
                        <Col sm={6} md={3}>
                            <div className='text-center py-5'>
                                <img className='w-75' src={counterOne} />
                                <div className="counter-text">
                                    <h1>2500</h1>
                                    <p>HAPPY CLIENT</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className='text-center py-5'>
                                <img className='w-75' src={counterTwo} />
                                <div className="counter-text">
                                    <h1>490</h1>
                                    <p>COFFEE CUPS</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className='text-center py-5'>
                                <img className='w-75' src={counterThree} />
                                <div className="counter-text">
                                    <h1>50</h1>
                                    <p>BRANCHES</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className='text-center py-5'>
                                <img className='w-75' src={counterFour} />
                                <div className="counter-text">
                                    <h1>345</h1>
                                    <p>EMPLOYEES</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HomeOtherSection;