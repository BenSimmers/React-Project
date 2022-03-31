import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //import bootstrap
import React from "react";
import "react-bootstrap";
import { useState } from "react";

import "./App.css";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

const Rankings = () => (
  <>
  <div className="container">
    <Row>
      <Col sm>
        lorem ipsum somethinglorem ipsum something lorem ipsum something lorem
        ipsum somethinglorem ipsum something
      </Col>
      <Col sm>
        lorem ipsum somethinglorem ipsum something lorem ipsum something lorem
        ipsum somethinglorem ipsum something
      </Col>
      <Col sm>
        lorem ipsum somethinglorem ipsum something lorem ipsum something lorem
        ipsum somethinglorem ipsum something
      </Col>
      <Col sm>
        lorem ipsum somethinglorem ipsum something lorem ipsum something lorem
        ipsum somethinglorem ipsum something
      </Col>
    </Row>
    <hr></hr>
    <div className="boxmain">
          Minty Yard
          <p className="text-small">We are a nice place to eat at :)</p>
          <Button variant="danger">Nothing here</Button>
        </div>

  </div>
  
  </>
);

function User(props) {
  let random = Math.floor(Math.random() * 10) + 1;

  const fetchUser = () => {
    const url = `https://reqres.in/api/users/${random}`;

    return fetch(url)
      .then((res) => res.json())
      .then((res) => res.data);
  };

  const [user, setUser] = useState(fetchUser(props.id));

  return (
    <div className="User">
      <ul>
        <img src={user.avatar} alt="avatar" /> 
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>Email: {user.email}</p>
        <button onClick={() => {fetchUser(props.id).then((user) => {setUser(user);});}}>Person</button>

      </ul>
    </div>
  );
}








const Home = () => (
  <>
    <div className="text-adjustment">
      <div className="container">
        <h1>Hello world</h1>
        <br />
        <Row>
          <Col xs={6}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
            voluptatibus distinctio perferendis provident mollitia nobis
            suscipit earum quas nam, cumque hic tenetur facere laudantium? Dicta
            voluptatibus eveniet neque quibusdam aspernatur. Dolore,
            voluptatibus? Ullam itaque qui asperiores aspernatur eligendi
            repellendus soluta, magnam quae iure vitae beatae quod culpa maxime.
            Unde ullam modi sit incidunt facere vel temporibus saepe ea vitae
            laboriosam?
          </Col>
          <Col xs={6}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
            voluptatibus distinctio perferendis provident mollitia nobis
            suscipit earum quas nam, cumque hic tenetur facere laudantium? Dicta
            voluptatibus eveniet neque quibusdam aspernatur. Dolore,
            voluptatibus? Ullam itaque qui asperiores aspernatur eligendi
            repellendus soluta, magnam quae iure vitae beatae quod culpa maxime.
            Unde ullam modi sit incidunt facere vel temporibus saepe ea vitae
            laboriosam?
          </Col>
        </Row>
        <br />
        {/* 
        {User({id: 1})}
        {User({id: 2})}
        {User({id: 3})}
        {User({id: 4})} */}

        {/* Card stuff */}
        <br />






        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body className="bg-change image-text">
            <Card.Title>a nice card</Card.Title>
            <Card.Text>Sus</Card.Text>
            <Button variant="danger">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        <br />


        
        <br />



      </div>
    </div>
  </>
);

const Main = () => (
  <>
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link className="nav-fix" to="/">
                Home
              </Link></Nav.Link>
            <Nav.Link href="#features"><Link className="nav-fix" to="/rankings">
                Link1
              </Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <hr />

      {/* path stuff */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rankings" element={<Rankings />} />
      </Routes>
    </BrowserRouter>
  </>
);







function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
