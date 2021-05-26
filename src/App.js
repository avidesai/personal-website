import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Avi Desai",
      headerLinks: [
      {title: 'Home', path: "/"},
      {title: 'About', path: "/about"},
    ],
    home: {
      title: "Be curious.",
      subTitle: "Projects that make a difference",
      text: "Checkout my work below"
    },
    about: {
      title: "About Me",
    },
    contact: {
      title: "Let's Talk",
    }
    }
  }

  render(){
    return (
    <Router>
      <Container className = "p-0" fluid = {false}>
       <Navbar className = "border-bottom" bg = "transparent" expand = "lg">
        <Navbar.Brand>Avi Desai</Navbar.Brand>

        <Navbar.Toggle className="border-bottom" aria-controls = "navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle"> 
          <Nav className = "ml-auto">
            <Link className = "nav-link" to="/">Home</Link>
            <Link className = "nav-link" to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
       </Navbar>
       <Route path = "/" exact render = {() => <HomePage title= {this.state.home.title} subTitle = {this.state.home.subTitle} text = {this.state.home.text}/>} />
       <Route path = "/about" exact render = {() => <About title = {this.state.about.title} />} />
       <Footer/>
      </Container>
    </Router>

    );
  } 
}
export default App;
