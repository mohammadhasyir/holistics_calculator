import './App.css';
import {Nav,Navbar,Container} from 'react-bootstrap';
import pic from './images/hl logo.png';
import Calculator from './pages/calculator';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="shadow-sm" style={{height:100}}>
      <Container>
        <Navbar.Brand href="#home"><img src={pic} style={{width:150,height:40}}/></Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#home"><b>CONSULATION</b></Nav.Link>
          <Nav.Link href="#features"><b>TRAINING</b></Nav.Link>
          <Nav.Link href="#pricing"><b>QUIKHALAL</b></Nav.Link>
          <Nav.Link href="#pricing"><b>MYHALALGIG</b></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Calculator/>
    <Footer/>
    </div>
  );
}

export default App;
