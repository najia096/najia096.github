import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/plant1.png";
import projImg2 from "../assets/img/plant2.png";
import projImg3 from "../assets/img/plant3.gif";
import projImg4 from "../assets/img/plant4.gif";
import projImg5 from "../assets/img/lasso1.jpg";
import projImg6 from "../assets/img/lasso2.jpg";
import projImg7 from "../assets/img/codepath.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "./Projects.css";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "About Page",
      imgUrl: projImg1,
    },
    {
      title: "Signup Page",
      imgUrl: projImg2,
    },
    {
      title: "Feature1",
      description: "Text Search",
      imgUrl: projImg3,
    },
    {
      title: "Feature2",
      description: "Image Search",
      imgUrl: projImg4,
    },

  ];

  const projects2 = [
    {
      title: "Home Page Design",
      imgUrl: projImg5,
    },
    {
      title: "Add Product Page",
      imgUrl: projImg6,
    },

  ];

  const projects3 = [
    {
      title: "Web Application",
      imgUrl: projImg7,
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
                <p>Academic & Personal Projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Plantex</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Lasso</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Climate Today</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="second">
                    <Row>
                    <p>Collaborative Achievement: Group Project Crafting an Innovative Online Bidding Platform with React & Node.js, Backed by Back4App</p>
                        {
                          projects2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <p>A Web Application Addressing Climate Change: Understanding Impact and Promoting Prevention Strategies</p>
                      <Row>
                        {
                          projects3.map((project, index) => {
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