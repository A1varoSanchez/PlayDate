import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from 'react'

const Navigation = () => {
    const { loggedUser } = useContext(AuthContext)
    return (
        <Navbar bg="dark" data-bs-theme="dark" className='mb-5' expand="lg">
            <Container>
                <Navbar.Brand href="#home">PlayDate</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className='nav-link'>Inicio</Link>
                        <Link to={'/perfil/:usuario_id'} className='nav-link'>Mi perfil</Link>
                        <Link to={'/inicio-sesion'} className='nav-link'>Inicio sesión</Link>
                        <Link to={'/registro'} className='nav-link'>Registro</Link>
                        <Link to={'/eventos'} className='nav-link'>Eventos</Link>
                        <Link to={'/eventos/mapa'} className='nav-link'>Mapa</Link>
                        <Link to={'/crear'} className='nav-link'>Crear evento</Link>
                    </Nav>
                    <Navbar.Text className='Justify-content-end'>
                        {loggedUser && <Navbar.Text>Bienvenido {loggedUser.username}</Navbar.Text>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation