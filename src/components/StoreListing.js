import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StoreListing = () => {
  return (
    <Container style={{ marginTop: "40px", textAlign: "center" }}>
      <Row
        style={{
          borderBottom: "1px solid #E8E9EB",
          display: "flex",
          justifyContent: 'space-evenly'
        }}
      >
        <Row>
          <Col>
            <img src="http://placehold.jp/30x30.png" roundedCircle />
          </Col>
          <Col>
            <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>ALDI</h5>
            <p style={{ fontSize: "12px" }}>Delivery * Pickup</p>
          </Col>
          <Col>
            <img src="http://placehold.jp/30x30.png" roundedCircle />
          </Col>
          <Col>
            <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>
              Sprouts Farmers Market
            </h5>
            <p style={{ fontSize: "12px" }}>Delivery * Pickup</p>
          </Col>
          <Col>
            <img src="http://placehold.jp/30x30.png" roundedCircle />
          </Col>
          <Col>
            <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>Kroger</h5>
            <p style={{ fontSize: "12px" }}>Delivery</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="http://placehold.jp/30x30.png" roundedCircle />
          </Col>
          <Col>
            <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>ALDI</h5>
            <p style={{ fontSize: "12px" }}>Delivery * Pickup</p>
          </Col>
          <Col>
            <img src="http://placehold.jp/30x30.png" roundedCircle />
          </Col>
          <Col>
            <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>
              Sprouts Farmers Market
            </h5>
            <p style={{ fontSize: "12px" }}>Delivery * Pickup</p>
          </Col>
          <Col>
            <img src="http://placehold.jp/30x30.png" roundedCircle />
          </Col>
          <Col>
            <h5 style={{ fontWeight: "bold", fontSize: "18px" }}>Kroger</h5>
            <p style={{ fontSize: "12px" }}>Delivery</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default StoreListing;