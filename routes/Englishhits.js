import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import './Englishhits.css';
const playlists = [
  {
    id: 1,
    name: 'perfect',
    artist: 'Ed sheeran',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgKbYqs-6UUoQCsqNd9aXYmz_AC5FDAAIssp08YwYbXrEnTt_KOSFCPvPIzeJxqNM-Xk&usqp=CAU',
  },
  {
    id: 2,
    name: 'under the influence',
    artist: 'Chris brown',
    imageUrl: 'https://i.pinimg.com/474x/b6/95/3d/b6953d773e4749f086d17517a169f237.jpg',
  },
  {
    id: 3,
    name: 'Lover',
    artist: 'Taylor swift',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647',
  },
  {
    id: 4,
    name: 'Love Story',
    artist: 'Taylor swift',

    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a48964b5d9a3d6968ae3e0de',
  },
  {
    id: 5,
    name: 'Until I Found You',
    artist: 'Stephen Sanchez',

    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273eabddae72a3b1a5ed51d1ac6',
  },
  {
    id: 6,
    name: 'Night Changes',
    artist: 'Did Zayn',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgjKVFI0xgJ4iV-F-vnAAOo3BT7spzxruuA&usqp=CAU',
  },
  {
    id: 7,
    name: 'Summertime sadness',
    artist: 'Lana Del Rey',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9RRn1EITcESJwmIggh77nLkoAsI1SG_ChBw&usqp=CAU',
  },
  {
    id: 8,
    name: 'I Wanna Be Yours',
    artist: 'Arctic Monkeys',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163',
  },
  {
    id: 9,
    name: 'Calm Down',
    artist: 'Rema',
    imageUrl: 'https://c.saavncdn.com/596/Calm-Down-English-2022-20220826054039-500x500.jpg',
  },
  {
    id: 10,
    name: 'Heat Waves',
    artist: 'Dave Bayley',
    imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b2bb143-77d7-4d7f-a067-e4b93bb6c6b4/decq4wj-933b2060-ab7e-40dc-937a-c2e8099313e6.png/v1/fill/w_1280,h_1275,q_80,strp/heat_waves__album_cover__by_alexy07_decq4wj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3NSIsInBhdGgiOiJcL2ZcLzliMmJiMTQzLTc3ZDctNGQ3Zi1hMDY3LWU0YjkzYmI2YzZiNFwvZGVjcTR3ai05MzNiMjA2MC1hYjdlLTQwZGMtOTM3YS1jMmU4MDk5MzEzZTYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Pmmd9yYxU-GSTc07QnOFB9YfggqD_l-GGNuico2ETOA',
  },
  {
    id: 11,
    name: 'Love me Like I do',
    artist: 'Ellie Goulding',
     imageUrl: 'https://c.saavncdn.com/046/Love-Me-Like-You-Do-English-2015-500x500.jpg',
  },
  {
    id: 12,
    name: 'Believer',
    artist: 'Imagine Dragons',

    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg',
  },
  // Add more playlists as needed
];
function Englishhits(){
  return(
    <Container fluid>
    
        <Row>
        
        <div className="App">
        <div className="container mt-5">
          <h1 className="text-center mb-4">English Hits</h1>
          <Row>
            {playlists.map((playlist) => (
              <Col key={playlist.id} lg={3} md={2} sm={6} xs={12} className="mb-4">
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
  )
}
export default Englishhits;