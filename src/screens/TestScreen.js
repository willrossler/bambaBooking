import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const testScreen = () => {
  return (
    <>
      <Container style={{ backgroundColor: "lightgray", height: "400px" }}>
        <Row style={{ height: "50%" }}>
          <Col
            style={{
              backgroundColor: "lightblue",
              height: "100%",
              float: "left",
            }}
          >
            <Row style={{ height: "50%" }}>
              <Col
                style={{
                  backgroundColor: "lightgreen",
                  height: "100%",
                  float: "left",
                }}
              >
                Square 1
              </Col>
              <Col
                style={{
                  backgroundColor: "lightyellow",
                  height: "100%",
                  float: "left",
                }}
              >
                Square 2
              </Col>
            </Row>
            <Row style={{ height: "50%" }}>
              <Col
                style={{
                  backgroundColor: "lightcoral",
                  height: "100%",
                  float: "left",
                }}
              >
                Square 3
              </Col>
              <Col
                style={{
                  backgroundColor: "lightpink",
                  height: "100%",
                  float: "left",
                }}
              >
                Square 4
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default testScreen;
