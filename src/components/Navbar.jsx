import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavbarComponent = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Star wars univers</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="#login">Mario Rodríguez</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;