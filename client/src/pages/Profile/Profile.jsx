import { Container, Row, Col } from 'react-bootstrap'
import { AuthContext } from './../../contexts/auth.context'
import { useContext } from 'react'

const Profile = () => {
    const { loggedUser } = useContext(AuthContext)
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>{loggedUser.username}</h1>
                    <hr />
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Profile