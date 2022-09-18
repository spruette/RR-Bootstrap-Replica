import { FormControl } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

const AddressForm = () => {
  return (
    <div>
      <Dropdown className="bg-white text-white">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Eng
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">English</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Korean</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Card className="bg-dark text-white">
        <Card.Img src="http://placehold.jp/100x30.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ fontSize: "30px" }}>
            Order Groceries for Delivery <br /> or Pickup today
          </Card.Title>
          <Card.Text>
            Whatever you want from local stores, brought right to your door.
          </Card.Text>
          <InputGroup className="mb-3">
            <InputGroup.Text>Enter your Address</InputGroup.Text>
            <FormControl aria-label="Enter your Address" />
          </InputGroup>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default AddressForm;