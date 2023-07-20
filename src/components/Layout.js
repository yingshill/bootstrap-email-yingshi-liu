import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';

export default function Layout() {
  return (
    <Container>
    <p>This is bootstrap react container</p>
       <Row>
        <Col>Menu</Col>
        <Col>search bar</Col>
        <Col>settings</Col>
       </Row>
       <Row>
       
        <Col>
         <ButtonGroup vertical>
            <Button variant="secondary">Important</Button>
            <Button variant="secondary">Inbox</Button>
            <Button variant="secondary">Star</Button>
            <Button variant="secondary">Sent</Button>
            <Button variant="secondary">Draft</Button>
        </ButtonGroup>
        </Col>

        <Col>
            <Card>
                <Card.Header>Joy Badminton</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                        Your Joybadminton order was shipped via UPS.
                    </Card.Text>
                    <Button variant="primary">Reply</Button>
                </Card.Body>
             </Card>
             <Card>
                <Card.Header>Joy Badminton</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                        Your Joybadminton order was shipped via UPS.
                    </Card.Text>
                    <Button variant="primary">Reply</Button>
                </Card.Body>
             </Card>
             <Card>
                <Card.Header>Joy Badminton</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                        Your Joybadminton order was shipped via UPS.
                    </Card.Text>
                    <Button variant="primary">Reply</Button>
                </Card.Body>
             </Card>
             <Card>
                <Card.Header>Joy Badminton</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                        Your Joybadminton order was shipped via UPS.
                    </Card.Text>
                    <Button variant="primary">Reply</Button>
                </Card.Body>
             </Card>
        </Col>
        <Col>Single Email</Col>
       </Row>
    </Container>
  )
}
