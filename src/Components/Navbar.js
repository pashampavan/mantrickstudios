import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MantrickImg from '../Images/mantrick.png'
import './Navbar.css'

function newnavbar() {
  return (
    <header>
      <a className="logo" href=""><img src={MantrickImg} alt="" /></a>
      <ul className="nav">
        <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a className='spec' href="">Brochure</a></li>
        <li><a className='spec' href="">Schedule Meet</a></li>
      </ul>
      </header>
  );
}

export default newnavbar;