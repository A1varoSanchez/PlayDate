import { Container, Row, Col } from 'react-bootstrap'

import { AuthContext } from './../../contexts/auth.context'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddChildForm from '../../components/AddChildForm/AddChildForm'
import calculateAge from '../../utils/calculateAge'
import userservices from '../../services/user.services'

const Profile = () => {

    const { loggedUser } = useContext(AuthContext)
    const { _id } = useParams()

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        loadUser()
    }, [profile])

    const loadUser = () => {
        if (loggedUser._id === _id) {
            userservices
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
                        <h1>El perfil de {profile.username}</h1>
                        <hr />
                        <p><b>Dirección de email: </b>{profile.email}</p>
                        <p><b>Conoce a mi familia: </b>{profile.aboutUs}</p>
                        <p><b>Peques: </b> </p>
                        <ul>
                            {
                                profile.children.map((elm, i) => {

                                    return (
                                        <>
                                            <h5>Peque {i + 1} </h5>
                                            <p>{calculateAge(elm.birthday)} años</p>
                                            <p>{elm.gender}</p>
                                        </>
                                    )
                                })
                            }
                        </ul>
                        <AddChildForm />
                    </Col>
                </Row>
            </Container>
    )
}

export default Profile