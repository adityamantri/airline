import logo from "./logo.svg";
import './App.css';
import BookFlight from "./components/BookFlight";
import MyTrips from "./components/MyTrips";
import Checkin from "./components/Checkin";
import { Link } from "react-router-dom";
import {useState} from 'react';
import { Tab, Tabs, Container } from "react-bootstrap";
import FlightStatus from './components/FlightStatus';

function App() {
  const [key, setKey] = useState('Book');
  
  return (
    <div className="App">
      <div className="login-box">Login|Sign up</div>
      <Container>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      color="var(--primary1)"
      className="mb-3"
    >
      <Tab eventKey="Book" title="Book">
        <BookFlight/>
      </Tab>
      <Tab eventKey="MyTrips" title="My Trips">
        <MyTrips/>
      </Tab>
      <Tab eventKey="Check-in" title="Check-in">
        {/* <Sonnet /> */}
        <Checkin/>
      </Tab>
      <Tab eventKey="status" title="Flight status">
        {/* <Sonnet /> */}
        <FlightStatus/>
      </Tab>
    </Tabs>
      </Container>
    </div>
  );
}

export default App;
