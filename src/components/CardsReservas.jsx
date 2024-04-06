import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const CardsReservas = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={7}>
            <div
              style={{
                overflowY: "auto",
                overflowX: "hidden",
                maxHeight: "500px",
              }}>
              <Row>
                <Col>
                  <Card className="m-2 p-2">
                    <Card.Body>
                      <Row>
                        <Col xs={4}>
                          <img
                            src="https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_s5b-futbol-canchas-battaglia2.png"
                            alt="nashe"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Col>
                        <Col xs={8} className="text-left">
                          <h1>Titulo</h1>
                          <h3>Subtitulo</h3>
                          <Button variant="primary" className="m-1">
                            Hora 1
                          </Button>
                          <Button variant="primary" className="m-1">
                            Hora 2
                          </Button>
                          <Button variant="primary" className="m-1">
                            Hora 3
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={5}>

    <div style={{ height: "500px", backgroundColor: "lightgray" }}></div>
  </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardsReservas;
