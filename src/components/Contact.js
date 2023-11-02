import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';
import './Contact.css';

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({});
        if (status.success) {
          setFormDetails(formInitialDetails); // Reset form fields on success message
        }
      }, 5000); // 5 seconds, change this value to your preferred duration in milliseconds

      return () => clearTimeout(timer);
    }
  }, [status, formInitialDetails]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5xno2re', 'template_ae564da', form.current, 'kkwHbY1ldVJ3l_4AC')
      .then((result) => {
        setButtonText('Send');
        setStatus({ success: true, message: 'Message sent successfully' });
        console.log(result.text);
      }, (error) => {
        setButtonText('Send');
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        console.log(error.text);
      });
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="user_name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="user_lastname" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="user_email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="user_phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea name="message" value={formDetails.message} rows="6" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                  {status.message && (
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  )}
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
