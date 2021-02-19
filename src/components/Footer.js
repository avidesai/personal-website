import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    const styling = {
        fontSize: 13,
        fontWeight: 300
    }

    return (
        <footer className = "mt-5" >
            <Container fluid = {true}>
                <Row className = "border-top justify-content-between p-3">
                    <Col className = "p-1" md = {4} sm = {4}>
                    <p style = {styling}>thanks for visiting!</p>
                    </Col>
                    <Col className = "p-1" md = {1.5}>
                    <p style = {styling}>this site was created by Avi Desai</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
    
}

export default Footer;