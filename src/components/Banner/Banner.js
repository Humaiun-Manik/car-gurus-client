import React from 'react';
import './Banner.css';
import banner from '../../assets/images/HomeBanner.jpg';
import { Card, Col, Container, Row } from 'react-bootstrap';
import banner1 from './../../assets/images/car.jpg'

const Banner = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={banner1} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div>
              <h1>Welcome to Car Shop</h1>
              <p>It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine could you be mine its a neighborly day in this beautywood It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine could you be mine its a neighborly day in this beautywood is neighborhood a beautiful day for a would you be mine could you be mine its a neighborly day.</p>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div >
              <img className="w-100" src={banner} alt="banner-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;