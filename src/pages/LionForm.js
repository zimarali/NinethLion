import { useState } from 'react';
import { Form, Row, Col, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Lion from './ninethLionLogo.svg';
import { useNavigate } from "react-router-dom";

function LionForm(){
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleUserChange = event => {
      setUser(event.target.value.toUpperCase())
      if(event.target.value === ""){
        setError(false);
      }
    };
    const handlePassChange = event => {
      setPass(event.target.value.toUpperCase())
    };

    const handleKeyDown = event =>{
      if(event.keyCode === 13){
        event.preventDefault();
        if(user ==="GTFDML016" && pass ==="MILKEVOLI"){//WHY YOU LOOK AT THIS...YOU SUCK...
          console.log(`USER: ${user}, PASS: ${pass} - KEY PAIR FOUND`);
          navigate("/display");
        } else {
          console.log(`USER: ${user}, PASS: ${pass} - TRASH PAIR FOUND`);
          setError(true);
        }
      }
   }
    
    return (
      <div className="crt-scanlines crt-flicker crt-colorstep center">
      <Container style={{backgroundColor:'SeaGreen'}} >
      <Row>
        <Image src={Lion} className ="crt-photocolorstep" alt='...' fluid/>
      </Row>
      <form onKeyDown={handleKeyDown}>
      <Row style={{color:'SkyBlue'}}>
        <Col xs={1} md={1}></Col>
        <Col xs={2} md={1}><Form.Label>ID</Form.Label></Col>
        <Col xs={1} md={1}>=</Col>
        <Col xs={6} md={6}><Form.Control className="input" onChange={handleUserChange} value={user} placeholder=""/></Col>
      </Row>
      <Row style={{color:'SkyBlue'}}>
        <Col xs={1} md={1}></Col>
        <Col xs={2} md={1}><Form.Label>PASS</Form.Label></Col>
        <Col xs={1} md={1}>=</Col>
        <Col xs={6} md={6}><Form.Control className="input" onChange={handlePassChange} value={pass} type="password"/></Col>
      </Row>
      </form>
      <Row>
        {error ? <span className="text-center" style={{color:'red'}}>Wrong ID/Pass Pair!</span> : null}
      </Row>
      </Container>
      </div>
    );
  }

export default LionForm;