import { Container, Row, Col } from 'react-bootstrap'

import { AuthContext } from './../../contexts/auth.context'
import { useContext, useEffect, useState } from 'react'
import authService from '../../services/auth.services'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const { loggedUser } = useContext(AuthContext)
    const { _id } = useParams()

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        loadUser()
    }, [_id])

    const loadUser = () => {
        if (loggedUser._id === _id) {
            authService
                .findUser(_id)
                .then(({ data }) => {
                    setProfile(data)
                })
        }
    }

    return (
        !profile
            ?
            <h1>Cargando...</h1>
            :
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>{profile.username}</h1>
                        <hr />
                        <p>{profile.email}</p>
                        <p>{profile.aboutUs}</p>
                    </Col>
                </Row>
            </Container>
    )
}

export default Profile