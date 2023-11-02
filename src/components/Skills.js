import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import './Skills.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {

  const skills = [
    {
      title: "Proficient In:",
      description: "C++, Python",
    },
    {
      title: "Familiar With:",
      description: "Java, Javafx, SQL, HTML, CSS, JavaScript",
    },

  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Skills</h2>
               <Tab.Container id="skills-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Programming</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Technical & Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Core Competencies</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>
                      <strong>Programming Language:</strong> C++ (Proficient), Python3, Javafx, SQL, Scheme
                      </p>
                      <p>
                        <strong>Web Development:</strong> HTML, CSS, JavaScript, REACT, Node JS</p>
                      <p>
                        <strong>Tools & IDE:</strong> VS Code, IntelliJ IDEA, MySQL, Github</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p><strong>Productivity Software:</strong> Microsoft Office (Word, Excel, PowerPoint, MS Teams), Google Suite</p>
                      <p><strong>Development Tools:</strong> Visual Studio, MySQL, IntelliJ IDEA</p>
                      <p><strong>Banking Softwares:</strong> FIS Core Banking APIs, Service Now</p>
                      <p><strong>Designing Tools:</strong> Figma, Canva</p>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Problem Solving & Troubleshooting</p>
                      <p>Creativity & Designing</p>
                      <p>Teamwork & Leadership</p>
                      <p>Sales & Customer Service</p>
                      <p>Spoken Language: English, Bengali, Hindi, and Urdu</p>
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