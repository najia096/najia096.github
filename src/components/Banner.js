import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Web Developer", "Web Designer"];
  const period = 2000;

  const scrollToContact = () => {
    const contactSection = document.getElementById('connect'); // Get the contact section by its ID
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the contact section
    }
};

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={6}>
            <div className="fixed-image-container">
              <img src={headerImg} alt="Header Img" className="fixed-image" />
            </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="banner-content">
                  <h1>{`Najia Jahan`} </h1>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h2>{`Aspiring`} </h2>
                  <h2>
                    <strong>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Software Engineer", "Web Developer", "Web Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                    </strong>
                  </h2>
                  <p>
                    Hi, I am Najia, a Computer Science student with a passion for creating digital experiences. Aspiring to become a Software Engineer and Web Developer, I thrive on turning ideas into code and crafting elegant solutions. Explore my work, and let's connect to build something great together.
                  </p>
                  <button className="connect" onClick={scrollToContact}>
                Let’s Connect <ArrowRightCircle size={25} />
            </button>
                  </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
