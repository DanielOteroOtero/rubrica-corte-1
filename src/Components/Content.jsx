import React, { useState, useContext } from 'react';
import { DeportesContext } from './DeportesContext';
import { Card, Row, Col, Form } from 'react-bootstrap';

const Content = () => {
    const { deportes } = useContext(DeportesContext);
    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const filtroDeportes = category ? deportes.filter(deporte => deporte.category === category) : deportes;

    return (
        <div>
            <Form>
                <Form.Group controlId="categorySelect">
                    <Form.Label>Selecciona una categoría:</Form.Label>
                    <Form.Control as="select" value={category} onChange={handleChange}>
                        <option value="">Todas las categorías</option>
                        <option value="Deporte de mesa">Deportes de mesa</option>
                        <option value="Deporte de motor">Deportes de motor</option>
                        <option value="Deporte de equipo">Deportes de equipo</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <br />
            <Row>
                {filtroDeportes.map((deporte, index) => (
                    <Col key={index} bg={4}>
                        <Card className='border-5 mb-5' data-bs-theme='dark' style={{ width: '20rem', borderColor: 'rgb(32,201,0)' }}>
                            <Card.Img className='card-img-top' src={deporte.image} alt={deporte.title} />
                            <Card.Body>
                                <Card.Title><i>{deporte.title}</i></Card.Title>
                                <Card.Text>{deporte.description}</Card.Text>
                                <Card.Text><b>Categoria:</b> {deporte.category}</Card.Text>
                                <Card.Text><a href={deporte.teamLink}>{deporte.team}</a></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Content;