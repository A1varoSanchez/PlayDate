import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm.jsx'

const SignupPage = () => {

    return (

        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Registro</h1>
                    <hr />
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}


export default SignupPage