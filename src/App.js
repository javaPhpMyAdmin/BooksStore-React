import React from 'react';
//import { Nav, NavDropdown, Form, FormControl, Button , Container, Row, Col,Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal'

function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={BookList} />
        <Route exact path='/details' component={Details} />
        <Route exact path='/cart' component={Cart} />
        <Route component={Default}/>
      </Switch>
      <Modal/>
    </React.Fragment>
    
    
    /*<div className='container'>
      <div className='row'>
        <div className='col-6'>firts column</div>
        <div className='col-6'>
          <span>
          <i class="fas fa-house-signal"/>
          </span>
        </div>
      </div>
    </div>*/




   /* <div  className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark">
        <Navbar.Brand href="#home">Libreria</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Principal</Nav.Link>
            <Nav.Link href="#link">Acerca de nosotros</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Alguna porqueria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Algo 1 </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Algo 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Mas Porquerias</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            <Button variant="outline-success">Mi carrito</Button>
            </Form>
        </Navbar.Collapse>
      </Navbar>
      
      <div style={{display: 'flex', flex: 1}}>
        <Slider {...settings}>
          <Row>
              <React.Fragment>
                <Col >    
                    <Card >
                        <Card.Img variant="top" src={data[0].cover} />
                    </Card>
                    <Card.Body></Card.Body>
                </Col>
              </React.Fragment>
              <React.Fragment>
                <Col >    
                    <Card >
                        <Card.Img variant="top" src={data[1].cover} />
                    </Card>
                    <Card.Body></Card.Body>
                </Col>
              </React.Fragment>
              <React.Fragment>
                <Col >    
                    <Card >
                        <Card.Img variant="top" src={data[2].cover} />
                    </Card>
                    <Card.Body></Card.Body>
                </Col>
              </React.Fragment>
              <React.Fragment>
                <Col >    
                    <Card >
                        <Card.Img variant="top" src={data[1].cover} />
                    </Card>
                    <Card.Body></Card.Body>
                </Col>
              </React.Fragment>
          </Row>
        </Slider>
      </div>
      
    </div>*/
  )
}

export default App;
