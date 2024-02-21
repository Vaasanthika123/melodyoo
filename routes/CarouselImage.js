import Carousel  from 'react-bootstrap/Carousel';


function Carouselimage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
         
          className="d-block  w-100"
          src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         
     
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Rock Songs</h3>
          <p>Rocking to the rhythm of raw emotion</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1421217336522-861978fdf33a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG92ZSUyMG11c2ljfGVufDB8fDB8fHww"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>love songs</h3>
          <p>In the language of melodies, love speaks the loudest</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image URL
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>melody songs</h3>
          <p>Melodies as timeless as the memories they create</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         
          className="d-block  w-100"
          src="https://images.unsplash.com/photo-1517331028157-75de91e10628?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         
     
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Romantic Hits</h3>
          <p>Listening to the language of the heart in every beat</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         
          className="d-block  w-100"
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
         
     
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Latest 2023 Hits</h3>
          <p>upcoming hits</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         
          className="d-block  w-100"
          src="https://thumbs.dreamstime.com/z/violet-music-notes-sheet-tonality-blurred-lights-background-112324226.jpg?w=992"
         
     
          alt="sixth slide"
        />
        <Carousel.Caption>
          <h3>International top Hits</h3>
          <p>Global beats, local heartbeats</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         
          className="d-block  w-100"
          src="https://img.freepik.com/free-photo/piano-keys-closeup-blurred-background-with-bokeh_169016-43161.jpg?size=626&ext=jpg&ga=GA1.1.2118324618.1703671479&semt=sph"
         
     
          alt="seventh slide"
        />
        <Carousel.Caption>
          <h3>All time favorites</h3>
          <p>Global beats, local heartbeats</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  );
}
export default Carouselimage;