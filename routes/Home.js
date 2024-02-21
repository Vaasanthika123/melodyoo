import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Carouselimage from './CarouselImage';
import CardsImage from './CardsImage';
import Footer from './Footer';
import SearchBar from './SearchBar';




function Home() {
  return (
   
         <div className="player">
           
    <Navbar expand="lg" className="musicplayer">
      <Container>
        
        <Navbar.Brand href="#home">MELODYO... </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
          
            <Link to ='Login'>    
           <Nav.Link href="#Login">Login</Nav.Link></Link>
           <Link to='Register'>
            <Nav.Link href="#Register">Register</Nav.Link></Link>
            <Link to='AboutPage'>
            <Nav.Link href="#AboutPage">AboutUs</Nav.Link></Link>
            <Link to='LibraryPage'>
            <Nav.Link href="#LibraryPage">My Library</Nav.Link></Link> 
            
            <Link to ='Artist'>
            <Nav.Link href="#Artist">Artist</Nav.Link></Link>
            <Link to ='AudioPlayer'>
            <Nav.Link href="#AudioPlayer">AudioPlayer</Nav.Link></Link>
            <Link to ='MusicPlayer'>
            <Nav.Link href="#MusicPlayer"></Nav.Link></Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
      <SearchBar/>
    </Navbar>
    <Carouselimage/>
    <CardsImage/>
  
    <Footer/>
   
   
    
  
  </div>
  );
}

export default Home;