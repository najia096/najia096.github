import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo1.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/leetcode.svg';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{ height: "80px", marginRight: "10px" }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/najia-jahan-40ba11175/" target="_blank"> <img src={navIcon1} alt="" /> </a>
                            <a href="https://github.com/najia096" target="_blank"> <img src={navIcon2} alt="" /> </a>
                            <a href="https://leetcode.com/naziausha/" target="_blank"> <img src={navIcon4} alt="" /> </a>
                            <a href="https://www.facebook.com/raisa.riyasat" target="_blank"> <img src={navIcon3} alt="" /> </a>
            </div>
            <p>© 2023 Najia Jahan</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}