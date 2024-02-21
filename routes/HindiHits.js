import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
const playlists = [
  {
    id: 1,
    name: 'Tum he ho',
    artist: 'Arjith singh',
    imageUrl: 'https://scontent.fcjb6-1.fna.fbcdn.net/v/t1.18169-9/1010893_543458022362369_1981451493_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_ohc=n9Ov9F7t4r8AX8k0Idl&_nc_ht=scontent.fcjb6-1.fna&oh=00_AfBKBaMqDetrhzex2gwJShhBIU9o8YrZqSKNxHjZwuuFGA&oe=65C5B673',
  },
  {
    id: 2,
    name: 'Heriye',
    artist: 'Arijit Singh',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734a60872ae145776164540a7f',
  },
  {
    id: 3,
    name: 'Duniyaa',
    artist: 'Akhil and Dhvani Bhanushali',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2737b93fd8b0ade33ceb9d536de',
  },
  {
    id: 4,
    name: 'Samjhhawan',
    artist: 'Shreya Ghoshal',
  
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273118f1494d8f5ebea6cd5e20d',
  },
  {
    id: 5,
    name: 'tuj me rab ',
    artist: 'Jay Kadn and Roopkumar Rathod',
  
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273250f27a3f2cebbb709bcc93f',
  },
  {
    id: 6,
    name: 'Kaun Tujhe',
    artist: 'Plak Muchhal',
    imageUrl: 'https://e0.pxfuel.com/wallpapers/367/207/desktop-wallpaper-ms-dhoni-the-untold-story-movie-m-s-dhoni-the-untold-story-movie-thumbnail.jpg',
  },
  {
    id: 7,
    name: 'jab tak',
    artist: 'Armaan Malik',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b27302dde7bfff94df00c8b76eb4',
  },
  {
    id: 8,
    name: 'Ishq Wala Love ',
    artist: 'Vishal',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273ad40f4e70b2f2a2a6052d49d',
  },
  {
    id: 9,
    name: 'Kesariya',
    artist: 'Arijit singh',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62',
  },
  {
    id: 10,
    name: 'Saree ke fall sa',
    artist: ' Antara Mitra',
  
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2732d75be6872b986c872467eb1',
  },
  {
    id: 11,
    name: 'sum sathiya',
    artist: 'Priya Saraiya ',
    imageUrl: 'https://i.ibb.co/9G7TNCy/14.jpg',
  },
  {
    id: 12,
    name: 'Kabira',
    artist: ' Rekha Bhardwaj',
  
    imageUrl: 'https://i.ibb.co/pyS3WGz/17.jpg',
  },
  ]
  
function Hindihits(){
  return(
    <Container fluid>
  <h2 className="text-center mt-4">Hindi Hits</h2>
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
  )
}
export default Hindihits;