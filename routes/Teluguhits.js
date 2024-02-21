import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
const playlists = [
  {
    id: 1,
    name: 'yenti yenti',
    artist: 'Chinmayi',
    imageUrl: 'https://i.ibb.co/HKb19DB/90.jpg',
  },
  {
    id: 2,
    name: 'Aradhya',
    artist: 'sid ram',
    imageUrl: 'https://i.ibb.co/D8FrcXc/images.jpg',
  },
  {
    id: 3,
    name: 'Vellake',
    artist: 'Bharatt-saurabh',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2731b2c82f334221cdc905949c5',
  },
  {
    id: 4,
    name: 'Na roja Nuvve',
    artist: 'Hesham Abdul Wahab',
  
    imageUrl: 'https://i.ibb.co/161sqnS/56.jpg',
  },
  {
    id: 9,
    name: 'Butta Bomma',
    artist: 'Armaan Malik',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b27363118748c712b6ac32c0feec',
  },
  {
    id: 5,
    name: 'Srivalli',
    artist: 'sidsriram',
  
    imageUrl: 'https://i1.wp.com/neplych.com/wp-content/uploads/2021/11/Srivalli-Lyrics-Pushpa.jpg?fit=500%2C500&ssl=1',
  },
  {
    id: 6,
    name: 'oh sita ',
    artist: 'S.p.B.charan',
    imageUrl: 'https://i1.sndcdn.com/artworks-LcQiR7xpxhaW2wZo-MahJ2A-t500x500.jpg',
  },
  {
    id: 7,
    name: 'inkem inkem',
    artist: 'Sidsriram',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b27342c11cb1c4413d4656ba8464',
  },
  {
    id: 8,
    name: ' Samajavaragamana',
    artist: 'Sidsriram',
    imageUrl: 'https://3.bp.blogspot.com/-eCE0wSOcrS8/XaGHgHOvTbI/AAAAAAAAAlA/CeSuHbb6MvEqduOIYLE7wrcsES1jp94WwCK4BGAYYCw/s640/Ala-Vaikuntapuramulo-2019-telugu-songs-download-allu-arjun-pooja-hegde.jpg',
  },
  
  /*{
    id: 10,
    name: 'Neeva',
    artist: 'Yazin Nizar,Sameera',
  
    imageUrl: '',
  },*/
  
    
  ]
  
  function Teluguhits() {
    return (
      <Container fluid>
        <h2 className="text-center mt-4">Telugu Hits</h2>
        <Row>
        <div className="App">
          <div className="container mt-5">
            
            <Row>
              {playlists.map((playlist) => (
                <Col key={playlist.id} lg={3} md={1} sm={6} xs={12} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={playlist.imageUrl} alt={playlist.name} />
                    <Card.Body>
                      <Card.Title>{playlist.name}</Card.Title>
                      <Card.Text>{playlist.artist}</Card.Text>
  
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        </Row>
      </Container>
    );
  }
export default Teluguhits;