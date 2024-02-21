import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tamilhits.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Tamilhits.css';
const playlists = [
{
  id: 1,
  name: 'Unale Unale',
  artist: 'karthik',
  imageUrl: 'https://lastfm.freetls.fastly.net/i/u/ar0/4f4867826a664631b56b0dcaddeddb07.jpg',
},
{
  id: 2,
  name: 'Neethane Neethane',
  artist: 'A.R.Rahman',
  imageUrl: 'https://i.ibb.co/6sjwjJJ/12.jpg',
},
{
  id: 3,
  name: 'Yennai Maatrum Kadhale',
  artist: 'Sid Sriram',
  imageUrl: 'https://www.behindwoods.com/tamil-movies-cinema-news-15/images/a-review-of-naanum-rowdy-dhaan-teaser-photos-pictures-stills.jpg',
},
{
  id: 4,
  name: 'Pookale',
  artist: 'Shreya Ghoshal',

  imageUrl: 'https://c-fa.cdn.smule.com/rs-s81/arr/6b/cf/93a83ac8-8175-4919-8c96-7c63c4a938cb.jpg',
},
{
  id: 5,
  name: 'Yemma Yemma',
  artist: 'S.B.B',

  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9e/7aum_Arivu_%28soundtrack%29.jpg',
},
{
  id: 6,
  name: 'En Kaadhal',
  artist: 'Yuvan Shankar Raja',
  imageUrl: 'https://i.scdn.co/image/ab67616d0000b2737de8959929372430846f570e',
},
{
  id: 7,
  name: 'Nee paartha',
  artist: 'Swetha Mohan',
  imageUrl: 'https://i.scdn.co/image/ab67616d0000b2730d66934f5370419636c78f18',
},
{
  id: 8,
  name: 'pookal Pookum ',
  artist: 'G.v Prakash',
  imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d496b47f528e298bdaacae30',
},
{
  id: 9,
  name: 'Kandaagi Kandaagi',
  artist: 'Imman',
  imageUrl: 'https://cdn4.sharechat.com/6P0OR443POT74XKY1x20INPeojlrWEijdwX9_new_compressed_thumb.jpeg?tenant=sc&referrer=tag-service&f=thumb.jpeg',
},
{
  id: 10,
  name: 'Hayyoda',
  artist: 'Aniruth Ravichandhar',

  imageUrl: 'https://i.scdn.co/image/ab67616d0000b2731f00279071cc1ef6149a32be',
},
{
  id: 11,
  name: 'Azhagae Azhagae',
  artist: 'Hiphop Aadhi',
  imageUrl: 'https://i.ibb.co/w6Wf9S0/10.jpg',
},
{
  id: 12,
  name: 'Adiye koluthe',
  artist: 'Andrea jeremiah',

  imageUrl: 'https://i.scdn.co/image/ab67616d0000b2739d21983ed59023a824cf8a96',
},
]

function Tamilhits() {
  return (
    <Container fluid>
      <h2 className="text-center mt-4">Tamil Hits</h2>
      <Row>
      <div className="App">
        <div className="container mt-5">
          
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
  );
}

export default Tamilhits;
