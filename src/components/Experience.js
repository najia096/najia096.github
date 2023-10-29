import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import "./Experience.css"
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  return (
    <section className="experience" id="Experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                <Tab.Container id="Experience-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Internships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Leadership</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="experience-item">
                        <h3>Enterprise App Support Intern</h3>
                        <p><strong>Employer:</strong> Apple Bank</p>
                        <p><strong>Duration:</strong> Jun 2023 – Aug 2023</p>
                        <p><strong>Location:</strong> Manhattan, NY</p>
                        <ul className="experience-list">
                          <li>Conducted comprehensive web analysis of the bank's marketing site pages and documented the API suite of the core banking provider (FIS), ensuring clear and accessible integration guidelines.</li>
                          <li>Collaborated on a pivotal group project aimed at introducing a banking product specifically designed for Gen Z customers and presented the concept to the bank's CEO and senior executives, highlighting effective contribution and adept communication with top leadership.</li>
                          <li>Executed the design of a logo for the IT department, contributing to the department's visual identity.</li>
                        </ul>
                      </div>
                      <hr className="experience-divider" />
                      <div className="experience-item">
                        <h3>Information Technology Intern</h3>
                        <p><strong>Employer:</strong> NYC Department of Social Services</p>
                        <p><strong>Duration:</strong> July 2022 – August 2022</p>
                        <p><strong>Location:</strong> 4 WTC, NY</p>
                        <ul className="experience-list">
                          <li>Performed network, software, and hardware troubleshooting in the Financial Office Help Desk. Actively assisted in implementing new ideas in recreating FO Help Desk’s manual.</li>
                          <li>Assisted with database development using SQL, created Web Forms using HTML, CSS.</li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="experience-item">
                        <h3>College Assistant</h3>
                        <p><strong>Employer:</strong> Multimedia Center @ The City College of New York</p>
                        <p><strong>Duration:</strong> August 2022 – Present</p>
                        <p><strong>Location:</strong> 160 Convent Ave, NY</p>
                        <ul className="experience-list">
                          <li>Working in the Multimedia Center and Learning & Technology Resource Center to assist students and faculty with IT support.</li>
                          <li>Perform website editing for the CCNY School of Education webpages.</li>
                        </ul>
                      </div>
                      <hr className="experience-divider" />
                      <div className="experience-item">
                        <h3>Retail Experience</h3>
                        <p><strong>Employer:</strong> Walgreens</p>
                        <p><strong>Duration:</strong> March 2020 – August 2020</p>
                        <p><strong>Location:</strong> Times Square, NY</p>
                        <ul className="experience-list">
                          <li>Sales and customer service.</li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="experience-item">
                        <h3>Peer Mentor</h3>
                        <p><strong>Employer:</strong> SEEK @ The City College of New York</p>
                        <p><strong>Duration:</strong> July 2023 – Present</p>
                        <p><strong>Location:</strong> 160 Convent Ave, NY</p>
                        <ul className="experience-list">
                          <li>Working as a peer mentor for first-year students offering guidance on academics, personal challenges, and campus integration while fostering a supportive and goal-oriented environment.</li>
                        </ul>
                      </div>
                      <hr className="experience-divider" />
                      <div className="experience-item">
                        <h3>Secretary</h3>
                        <p><strong>Employer:</strong> Association for Computing Machinery Club @ CCNY</p>
                        <p><strong>Duration:</strong> January 2022 – January 2023</p>
                        <p><strong>Location:</strong> 160 Convent Ave, NY</p>
                        <ul className="experience-list">
                          <li>As Secretary of the ACM Club, effectively managed administrative tasks, including meeting minutes, event coordination, and communication, contributing to a 20% increase in club participation.</li>
                        </ul>
                      </div>
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
