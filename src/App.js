import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import SearchIcon from "@material-ui/icons/Search";
function App() {
  return (
    <Container fluid className="header">
      <Row>
        <Col sm={3} lg={2} xs={2}>
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Col>

        <Col  className="header__search">
          <Row>
            <Col sm={8} xs={8} >
              <input className="header__searchInput" type="text" />  
            </Col> 
            <Col >
              <SearchIcon className="header__searchIcon" /> 
              
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
