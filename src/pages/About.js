import React from "react";
import Hero from '../components/Hero'
import Content from "../components/Content";


function About(props){
    return(
        <div>
            <Hero title = {props.title}></Hero>
            <Content>
                <p>
                Hello, my name is Avi. I'm an junior Computer Science student at Oregon State University. 
                I'm interested in robots and I like <a href="https://github.com/avidesai">building things</a>. I have experience in Python, Java, HTML/CSS, JS, and React.
                </p>
                <p>
                I'm currently working at the <a href="https://www.charismarobotics.com/">CHARISMA Robotics Lab</a> on a path planning software for a multi robot system.
                This summer I'll be working as an intern at <a href="https://canvas.build/">Canvas</a>, a construction robotics startup working on planning and controls / hardware.
                I'm always learning new things, and I'm looking to gain more experience working with OpenCV, SLAM, and TensorFlow.
                </p>
                <p>
                I like to trade on the stock market and <a href="https://www.youtube.com/channel/UC-GOQDuCaVautaO43sluhEw">share my thoughts</a> with others too.
                My latest project is an crypto trading bot which will hopefully make me some money some day :)
                </p>
                <p>
                You can reach me on email at avi@avidesai.com.
                Feel free to connect with me on <a href="https://www.linkedin.com/in/avidesai/">LinkedIn</a> and find my <a href="https://docs.google.com/document/d/e/2PACX-1vR9C5gnLOBRQ8klPDPvvCtOY_4FISUSq15AIGsXKZPfw4erh1-ScYBDzsr34YkYEiZJARJQGvvDrHvN/pub">resume here</a>.
                </p>
            </Content>
        </div>
    );

}
export default About;