import React from "react";
import Hero from '../components/Hero'
import Content from "../components/Content";


function About(props){
    return(
        <div>
            <Hero title = {props.title}></Hero>
            <Content>
                <p>
                Hello, my name is Avi. I'm a second year Computer Science student at Oregon State University. 
                I'm interested in robots and I like <a href="https://github.com/avidesai">building things</a>. I have experience in Java, C++, ROS, HTML/CSS, JS, and React.
                </p>
                <p>
                I'm currently working at the <a href="https://www.charismarobotics.com/">CHARISMA Robotics Lab</a> on a path planning software for a multi robot system.
                I'm always learning new things, and I'm looking to gain more experience working with OpenCV, SLAM, and TensorFlow.
                </p>
                <p>
                I like to trade on the stock market and <a href="https://www.youtube.com/channel/UC-GOQDuCaVautaO43sluhEw">share my thoughts</a> with others too.
                My latest project is an algorithmic trading bot which will hopefully make me some money on the side :)
                </p>
                <p>
                Feel free to connect with me on <a href="https://www.linkedin.com/in/avidesai/">LinkedIn</a> and find my <a href="https://docs.google.com/document/d/e/2PACX-1vR9C5gnLOBRQ8klPDPvvCtOY_4FISUSq15AIGsXKZPfw4erh1-ScYBDzsr34YkYEiZJARJQGvvDrHvN/pub">resume here</a>.
                </p>
            </Content>
        </div>
    );

}
export default About;