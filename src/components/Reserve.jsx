import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsReservas from "./CardsReservas";

const Reserve = () => {
  return (
    <Container fluid>
      <Row>

          <CardsReservas />
      </Row>
    </Container>
  );
};

export default Reserve;