import { useContext, useEffect, useState } from "react"
import eventServices from "../../services/event.services"
import { Link, useParams } from "react-router-dom"
import { Col, Container, Row, Button } from "react-bootstrap"
import logo from './../../assets/playdate-logo.png'
import { AuthContext } from "../../contexts/auth.context"

const EventDetailsPage = () => {

    const { event_id } = useParams()

    const { loggedUser } = useContext(AuthContext)

    const [event, setEvent] = useState({})

    const [joinEvent, setJoinEvent] = useState({
        participants: []
    })

    useEffect(() => {
        loadEventDetails()
    }, [])

    const loadEventDetails = () => {
        eventServices
            .getEventDetails(event_id)
            .then(({ data }) => setEvent(data))
            .catch(err => console.log(err))
    }

<<<<<<< HEAD
=======
    const [joinEvent, setJoinEvent] = useState({
        participants: []
    })
>>>>>>> alvaro
    const handleJoinEvent = (event_id) => {
        eventServices
            .joinEvent(loggedUser._id, event_id)
            .then(({ data }) => {
                setJoinEvent(data)
            })
            .catch(err => console.log(err))
    }

    return (

        !event
            ?
            <h1>Cargando...</h1>
            :
            <Container>

                <h1 className="mb-4">Detalles de {event.name}</h1>
                <hr />
                <Row>
                    <Col md={{ span: 6, offset: 1 }}>
                        <h3 >Organizadores: {event.organizer?.username}</h3>
                        <h4>Tipo de evento: {event.type}</h4>
                        <h4>Edad recomendada: {event.ageGroup} años</h4>
                        <h4>Plan: {event.description}</h4>
                        <hr />
                        <Link to="/eventos" className="btn btn-dark">Volver a los eventos</Link>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <img src={logo} style={{ width: '100%' }} />
                    </Col>
                </Row>
                <Button onClick={() => handleJoinEvent(event._id)}>Unirme</Button>
            </Container >
    )
}


export default EventDetailsPage