import React from 'react';
import './Banner.css';
import { Card } from 'react-bootstrap';
import banner1 from './../../assets/images/banner1.jpg'

const Banner = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img className='banner_img' src={banner1} alt="Banner image" />
        <Card.ImgOverlay className='banner'>
          <div className='banner-text'>
            <Card.Title>
              <h1>Welcome to Car Shop</h1>
            </Card.Title>
            <Card.Text>
              <p>
                It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine could you be mine its a neighborly day in this beautywood It is a beautiful day in this neighborhood a beautiful day for a neighbor would you be mine could you be mine its a neighborly day in this beautywood is neighborhood a beautiful day for a would you be mine could you be mine its a neighborly day.
              </p>
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Banner;