import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import Card from "../components/Card";

import astarr from "../assets/images/astar.jpeg";
import stellar from "../assets/images/stellar.png";
import robocar from "../assets/images/robocar.gif";

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Robot Path Planning',
                    subTitle: 'The cookbook for developers',
                    imgSrc: astarr,
                    link: 'https://en.wikipedia.org/wiki/A*_search_algorithm',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Stellar Trades',
                    subTitle: 'YouTube channel',
                    imgSrc: stellar,
                    link: 'https://www.youtube.com/channel/UC-GOQDuCaVautaO43sluhEw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Personal Robotics',
                    subTitle: 'A social network for developers',
                    imgSrc: robocar,
                    link: 'http://randomcolour.com/',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {        
            return <Card item = {item} click = {(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
        
    }

    render(){
        return(
            <Container fluid = {true}>
                <Row className = "justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}
export default Carousel;