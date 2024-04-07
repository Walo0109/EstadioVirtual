import { Card, Button, Row, Col, Container, Modal } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import React, { useState } from "react";
import "../css/CardReservas.css";


function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
const CardsReservas = () => {
  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096036!2d144.9537363153155!3d-37.817209979751984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631233123456!5m2!1sen!2sus"
  );

  const handleAddressClick = (address) => {
    console.log(process.env); // Log the environment variables
    
    const encodedAddress = encodeURIComponent(address);
    const newMapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${encodedAddress}`;
    setMapUrl(newMapUrl);
  };

  const validMapUrl = isValidUrl(mapUrl) ? mapUrl : "https://defaulturl.com";

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
                        <Col xs={12} md={4}>
                          <img
                            src="https://lh3.googleusercontent.com/p/AF1QipMlS5H2C7FKlAmXQwv1X_AMHkMj6jE10YmhyElZ=s680-w680-h510"
                            alt="nashe"
                            style={{
                              width: "100%",
                              height: "300px",
                              objectFit: "cover",
                            }}
                          />
                        </Col>
                        <Col xs={8} className="text-left">
                          <h1>Unico Sport</h1>
                          <h3
                            className="address-link"
                            onClick={() =>
                              handleAddressClick("Avenida Peron 1000")
                            }>
                            <FaMapMarkerAlt />
                            Avenida Peron 1000
                          </h3>

                          <Button variant="primary" className="m-1">
                            20:00
                          </Button>
                          <Button variant="primary" className="m-1">
                            21:00
                          </Button>
                          <Button variant="primary" className="m-1">
                            22:00
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="m-2 p-2">
                    <Card.Body>
                      <Row>
                        <Col xs={12} md={4}>
                          <img
                            src="https://scontent.faep6-1.fna.fbcdn.net/v/t39.30808-6/305997760_598299011922220_510540588570446453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aaarXv6GeqkAb53WZwI&_nc_ht=scontent.faep6-1.fna&oh=00_AfC4JgDrzoweVf9rToXmCn4jAqkiF5KgOODfzdiBdvtpFQ&oe=66176CA1"
                            alt="nashe"
                            style={{
                              width: "100%",
                              height: "300px",
                              objectFit: "cover",
                            }}
                          />
                        </Col>
                        <Col xs={8} className="text-left">
                          <h1>La Belgrano F5</h1>
                          <h3
                            className="address-link"
                            onClick={() =>
                              handleAddressClick("Avenida Belgrano 3165")
                            }>
                            <FaMapMarkerAlt />
                            Avenida Belgrano 3165
                          </h3>

                          <Button variant="primary" className="m-1">
                            20:00
                          </Button>
                          <Button variant="primary" className="m-1">
                            21:00
                          </Button>
                          <Button variant="primary" className="m-1">
                            22:00
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="m-2 p-2">
                    <Card.Body>
                      <Row>
                        <Col xs={12} md={4}>
                          <img
                            src="https://scontent.faep6-2.fna.fbcdn.net/v/t39.30808-6/354234302_705187504947878_867130934374303478_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1ekaKuFf9JUAb4clW-P&_nc_ht=scontent.faep6-2.fna&oh=00_AfDzT40Ilktzj3pZANaZVVa6qYbhEKKSgdA1der-_UakLg&oe=66178614"
                            alt="nashe"
                            style={{
                              width: "100%",
                              height: "300px",
                              objectFit: "cover",
                            }}
                          />
                        </Col>
                        <Col xs={8} className="text-left ">
                          <h1>La San Juan F5</h1>
                          <h3
                            className="address-link"
                            onClick={() => handleAddressClick("San Juan 3481")}>
                            <FaMapMarkerAlt />
                            San Juan 3481
                          </h3>

                          <Button variant="primary" className="m-1">
                            20:00
                          </Button>
                          <Button variant="primary" className="m-1">
                            21:00
                          </Button>
                          <Button variant="primary" className="m-1">
                            22:00
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
      <div style={{ height: "500px", backgroundColor: "lightgray" }}>
        <iframe
          src={validMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"></iframe>
      </div>
    </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardsReservas;
