import React, { useState } from 'react'
import { DeportesProvider } from './DeportesContext';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
import Content from './Content';
import Create from './Create';
import Home from './Home';

const DeportesApp = () => {
    const [vista, setVista] = useState('HOME');

    const handleViewChange = (selectedView) => {
        setVista(selectedView);
    };

    return (
        <nav>
            <DeportesProvider>
                <Container fluid>
                    <Row>
                        <Col>
                            <Navbar bg='dark' data-bs-theme="dark" className='d-flex' expand="lg" fixed='top'>
                                <Navbar.Brand href={<Home />}>Deportes</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link onClick={() => handleViewChange('CONTENT')}>Contenido</Nav.Link>
                                        <Nav.Link onClick={() => handleViewChange('CREATE')}>Crear</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                {vista === 'CONTENT' && <Content />}
                                {vista === 'CREATE' && <Create />}
                                {vista === 'HOME' && <Home />}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </DeportesProvider>
        </nav>
    );
};


export default DeportesApp;
