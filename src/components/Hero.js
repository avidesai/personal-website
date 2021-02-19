import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Hero(props){
    return (
    <Jumbotron className = "bg-transparent jumbotron-fluid">
        <Container fluid = {false}>
            <Row className = "justify-content-center py-8">
                <Col md = {8} sm = {12}>
                {props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1>}
                {props.subTitle && <h4 className="display-5 font-weight-light">{props.subTitle}</h4>}
                {props.text && <h6 className="lead font-weight-light">{props.text}</h6>}
                </Col>
            </Row>
        </Container>
    </Jumbotron>
    )
}
export default Hero;