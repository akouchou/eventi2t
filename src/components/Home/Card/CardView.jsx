import React from 'react';
import img1 from '../Card/yaounde.jpg';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'


const CardView = () => {
  return (
    <div className="text-center">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img1} className="card-mg-top"/>
        <Card.Body>
            <Card.Title>Intelligence Artificielle et Médecine</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Link to="/event" variant="danger">Plus d'infos</Link>
        </Card.Body>
    </Card>
    </div>
  );
}

export default CardView;