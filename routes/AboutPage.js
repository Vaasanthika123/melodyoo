import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutPage.css';
import Footer from './Footer';


const AboutPage = () => {
  return (
    <div>
    <Container className="about-page">
      <Row>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Welcome to our music player app, where you can enjoy your favorite
            music seamlessly. Our app is designed to provide a fantastic
            listening experience with a user-friendly interface.
          </p>
          <p>
            Whether you're a music enthusiast or just looking for a simple
            player, our app has you covered. Explore the features and make the
            most out of your music library.
          </p>
        </Col>
        <Col md={12}>
          <h1>Types Of Music</h1>
         <li>Melody</li>
         <li>Pop</li>
         <li>Jazz</li>
         <li>Rock</li>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </div>
  );
};


export default AboutPage;
