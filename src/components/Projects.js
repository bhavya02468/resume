import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/emp.png";
import projImg2 from "../assets/img/Emotion.jpg";
import projImg3 from "../assets/img/game.png";
import projImg4 from "../assets/img/sort.png";
import projImg5 from "../assets/img/fleet.png";
import projImg6 from "../assets/img/pass.webp";
import projImg7 from "../assets/img/server.webp";

import projImg8 from "../assets/img/project.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Employee Management System",
      description: "Angular and nodejs",
      imgUrl: projImg1,
      url: "https://github.com/bhavya02468/ems",
    },
    {
      title: "Emotion Recognition AI",
      description: "Python",
      imgUrl: projImg2,
      url: "https://github.com/bhavya02468/Emotion_Recognition_AI"
    },
    {
      title: "RPG Game",
      description: "C++",
      imgUrl: projImg3,
      url: "https://github.com/ValvatorezBraveheart/COMP345-ProjectGUI"
    },
    {
      title: "Sort Visualizer",
      description: "Changed and Updated existing project",
      imgUrl: projImg4,
      url: "https://github.com/nidhihoque/sortvisualizer"
    },
    {
      title: "Fleetflow",
      description: "Conuhacks SAP Challenge Winner",
      imgUrl: projImg5,
      url: "https://github.com/Zineb2a/Fleetflow"
    },
    {
      title: "Password Manger",
      description: "Conuhacks 2023 challenge runner up",
      imgUrl: projImg6,
      url: "https://github.com/antoking132/hack"
    },
    {
      title: "Simple Node.js Server",
      description: "Simple Node.js Server",
      imgUrl: projImg7,
      url: "https://github.com/bhavya02468/Node.js_Server"
    },
    {
      title: "Other Small Projects",
      description: "On my github",
      imgUrl: projImg8,
      url: "https://github.com/bhavya02468"
    },

    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
