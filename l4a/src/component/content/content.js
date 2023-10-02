import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../img/logo.jpg";
import "./content.css";

let content = () => {
  return (
    <div id="contentSection">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div>
              <h3>Who we are</h3>
              <p className="contentText">
                At Leverage 4 Advantage, we are the driving force behind the
                world's most successful organizations. With a proven track
                record of delivering transformative solutions, we empower
                businesses to unlock their full potential and reach new heights
                of success. As a global leader in the consulting industry, we
                are dedicated to delivering excellence, innovation, and results.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div>
              <img src={logo} className="logo" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default content;
