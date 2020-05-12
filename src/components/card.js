import React from 'react';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap' 




const CardBook = () =>{
    return(
        <Row>
            <React.Fragment>
                <Col >    
                    <Card >
                        <Card.Img variant="top"  />
                    </Card>
                    <Card.Body></Card.Body>
                </Col>
            </React.Fragment>
            <React.Fragment>
                <Col >    
                    <Card >
                        <Card.Img variant="top"  />
                    </Card>
                    <Card.Body></Card.Body>
                </Col>
            </React.Fragment>
            <React.Fragment>
                <Col >    
                    <Card >
                        <Card.Img variant="top"  />
                    </Card>
                    <Card.Body></Card.Body>
                </Col>
            </React.Fragment>
            <React.Fragment>
                <Col >    
                    <Card >
                        <Card.Img variant="top"  />
                    </Card>
                    <Card.Body></Card.Body>
                </Col>
            </React.Fragment>
        </Row>
    );
}


export default CardBook;