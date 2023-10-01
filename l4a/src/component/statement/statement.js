import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./statement.css";

let statement = () => {
  return (
    <div id="statementSection">
      <Container>
        <Row>
          <Col>
            <div className="statementBox">
              <h5>Our Expertise</h5>
              <p className="statementText">
                Leverage 4 Advantage brings together a team of seasoned experts
                with deep industry knowledge across a wide spectrum of sectors.
                From finance and technology to healthcare and beyond, our
                consultants are thought leaders in their respective fields. We
                understand the unique challenges facing businesses today, and we
                have the insight and experience to guide you toward sustainable
                growth and success.
              </p>
            </div>
          </Col>
          <Col>
            <div className="statementBox">
              <h5>Our Commitment</h5>
              <p className="statementText">
                At Leverage 4 Advantage, we are committed to delivering results
                that exceed expectations. Our approach is grounded in a
                client-centric philosophy, which means your success is our
                priority. We work collaboratively with our clients, listening to
                their unique needs, and tailoring our solutions to match their
                goals.
              </p>
            </div>
          </Col>
          <Col>
            <div className="statementBox">
              <h5>Our Reach</h5>
              <p className="statementText">
                Our global presence is growing internationally, with a global network,
                Leverage 4 Advantage is positioned to serve clients worldwide.
                Whether you are a startup seeking rapid growth or a
                multinational corporation navigating complex global challenges,
                we have the expertise and reach to support your journey.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="statementBox">
              <h5>Join Us in Shaping the Future</h5>
              <p className="statementTextFuture">
                We invite you to explore how Leverage 4 Advantage can drive your
                organization toward new levels of success. Discover our case
                studies, read our thought leadership articles, and get in touch
                with our team to discuss how we can help you achieve your
                business objectives.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default statement;
