import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'; 
import './CardsImage.css';
import { Link } from 'react-router-dom';
function CardsImage() {
  return (
  <div>
    <section>
      <br/><br/>
      <center> 

          <h1>latest 2023</h1>
          </center>
    <CardGroup>
        
      <Card>
      <Link to='/Tamilhits'><Card.Img variant="top"  src="https://i.ibb.co/P9wctRc/11.jpg" /></Link>
        <Card.Body>
        <Link to='/Tamilhits'><Card.Footer>
          <small className="text-muted">tamil hits</small>
        </Card.Footer> </Link>       
        </Card.Body>
       
      </Card>
      <Card>
      <Link to='/Hindihits'><Card.Img variant="top" src="https://img.wynk.in/unsafe/320x180/top/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431956033_20230814133125/8903431956033/1692001213665/resources/8903431956033.jpg" /></Link>
      <Card.Body>
      <Link to='/Hindihits'><Card.Footer>
          <small className="text-muted">hindi hits</small>
        </Card.Footer></Link>
        </Card.Body>
      </Card>
      <Card>
      <Link to='/Teluguhits'><Card.Img variant="top" src="https://m.sakshi.com/sites/default/files/article_images/2023/07/14/Anand-Devarakonda%27s-Baby-Movie-10.jpg" /></Link>
        <Card.Body>
        <Link to='/Teluguhits'><Card.Footer>
          <small className="text-muted">Telugu hits</small>
        </Card.Footer></Link>
        </Card.Body>
        </Card>
        <Card>
        <Link to='/Englishhits'><Card.Img variant="top"  src="data:image/jpeg;base64,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"/></Link>
        <Card.Body>
        <Link to='/Englishhits'> <Card.Footer>
          <small className="text-muted">English hits</small>
        </Card.Footer></Link>     
        </Card.Body>
       
      </Card>
      
      </CardGroup>
      </section>
      <br /><br />
      <center>

                <h1>International top hits</h1>
                   </center>
      <CardGroup>
        <Card>

        <Card.Img variant="top" src="https://i1.sndcdn.com/artworks-RuTdLJxuEtrUeBVN-ZdTmlA-t500x500.jpg" />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">Baby</small>
        </Card.Footer>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://archive.org/download/daddy-yankee-gasolina/Gasolina/a.jpg" />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">Gasolina</small>
        </Card.Footer>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/59/59/a8/5959a8a4-b30e-fe43-8c64-ff714cd9dba8/cover.jpg/400x400cc.jpg" />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">Believer</small>
        </Card.Footer>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://i1.sndcdn.com/artworks-h1slzbVOItFCDDk5-YGhgLQ-t500x500.jpg"  />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">Herleys in hawali</small>
        </Card.Footer>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMmVkNzQ5ZGQtN2Y1ZC00NzM5LWJhZjEtODM3Mzg5MjEyMjk3XkEyXkFqcGdeQXVyNDU1NDIzMzY@._V1_.jpg" />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">Calm Down</small>
        </Card.Footer>
        </Card.Body>
        </Card>
      </CardGroup>
      <section>
      <br/><br/>
      <center>

          <h1>All time favorites</h1>
          </center>
    <CardGroup>
        
      <Card>
        
        <Card.Img variant="top"  src="https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96" />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">Perfect</small>
        </Card.Footer>        
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.kfs.io/album/global/180926620,0v1/fit/500x500.jpg" />
        <Card.Body>
          <Card.Footer>
          <small className="text-muted">Until i Found you</small>
        </Card.Footer>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="data:image/jpeg;base64,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ToSJAXM3XFpzgEcwWgrVRVDmytlBy9r2yZPW4O3vrXgiDpO2DU1NcJKIUsokZFFI95GQA6Qt8U5+EAzn2ZWr09rNlJZq+3GN7pKsu4TwW8NoexrJN7JyPFbkYByT1KFIgqDjoVERAREQEREBERAREQXte4Zw4jeBacHGR2HtCzrFcPBaymqcE8CeKUgYyWteC5o8oyFrkQSraJqOO53F1RE1zYhHHFHxAA/daCSSBnHjOd1qT1Gqqd2kGUfGaaovbAYs+OGtqOIHY+LuNaM9GeS5cmUG70pqKW2VbamFrXuDHxuY8Hcc1w6Djn0gHzLWVtS6aaSZ5y+Z75HkchvPcXH2krHRAREQEREF5ViuKtQEREBERAREQEREBERAREQEREBECICIiAiIgIiICIiAiIguKohRBRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBUqiFEBERAREQEREBERAREQEREBERAREQEREBERAREQAiIgIiIBREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERaFQiIolFREVUREQEKIoCIigIiICIiAEREBERAREQEREBXIi0lArURB//2Q==" />
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">I Wanna Be Yours</small>
        </Card.Footer>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top"  src="https://i.scdn.co/image/ab67616d0000b273f894be72a77b1488292672c7"/>
        <Card.Body>
        <Card.Footer>
          <small className="text-muted">Summertime Sadness</small>
        </Card.Footer>        
        </Card.Body>
       
      </Card>
      
      </CardGroup>
      </section>
      <br /><br />
      <center></center>
      
    </div>
  );
}

export default CardsImage;