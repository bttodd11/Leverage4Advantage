import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import email from "../img/email.png";
import phone from "../img/phone.png";
import "./contact.css";

let contact = () => {
  return (
    <div id="contactSection">
      <h4 className="contactTitle">Contact</h4>
        <Container>
          <Row>
            <Col>
            <h5>Phone</h5>
            <p>800-674-3352</p>
            </Col>
            <Col>
            <h5>Email</h5>
            <p>info@leverage4advantage.com</p>
            </Col>
          </Row>
        </Container>
          </div>
  );
};

export default contact;
