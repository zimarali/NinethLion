import { useState } from "react";
import { Container, Row, Dropdown } from "react-bootstrap";
import Clock from "./Clock.js";
import Weather from "./Weather.js";
import { useNavigate } from "react-router-dom";

function Display() {
  const [flicker, setFlicker] = useState("crt-scanlines crt-flicker");
  const [flickerState, setFlickerState] = useState(true);
  const [textFlicker, setTextFlicker] = useState("crt-colorstep");
  const [textFlickerState, setTextFlickerState] = useState(true);
  const navigate = useNavigate();

  const handleFlicker = () => {
    if (flickerState === true) {
      setFlickerState(false);
      setFlicker("");
      console.log(`flicker off`);
    } else {
      setFlickerState(true);
      setFlicker("crt-scanlines crt-flicker");
      console.log(`flicker on`);
    }
  };

  const handleTextFlicker = () => {
    if (textFlickerState === true) {
      setTextFlickerState(false);
      setTextFlicker("");
      console.log(`text flicker off`);
    } else {
      setTextFlickerState(true);
      setTextFlicker("crt-colorstep");
      console.log(`text flicker on`);
    }
  };

  return (
    <span className={flicker}>
      <Container className="text-center">
        <Row>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleFlicker}>
                Toggle Screen Flicker
              </Dropdown.Item>
              <Dropdown.Item onClick={handleTextFlicker}>
                Toggle Text Flicker
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/')}>
                Return to login
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Row>
        <span className={textFlicker}>
        <Row>
          <Clock />
        </Row>
        <Row className="industria weatherdisplay">
          <Weather />
        </Row>
        </span>
      </Container>
    </span>
  );
}

export default Display;
