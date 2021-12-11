
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import roles from '../helpers/roles';
import routes from  '../helpers/routes'
export default function Navigation() {

    const {logout}=useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="primary">
            <Navbar.Brand as={NavLink} to="/">
                SouWeb-Proyectos. 1.0
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                   <Nav.Link as={NavLink} to={routes.home}>Indicadores</Nav.Link>
                        <NavDropdown title="Proyectos">
                            <NavDropdown.Item href={routes.projects}>Crear Proyectos</NavDropdown.Item>
                            <NavDropdown.Item>Aprobar Proyectos</NavDropdown.Item>
                            <NavDropdown.Item>Cambiar Fase</NavDropdown.Item>
                            <NavDropdown.Item>Aprobar Solicitudes</NavDropdown.Item>
                        </NavDropdown>
                    
                    <Nav.Link as={NavLink} to={routes.users}>Usuarios</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.login}>Login</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register}>Registro</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
                    <Nav.Link as="button" to={routes.account} on Click={logout}>Cerrar Session</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <h1>Navigation</h1>
        </Navbar>
    )
}
