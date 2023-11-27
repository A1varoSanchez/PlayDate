import { Form, Button, Row, Col } from 'react-bootstrap'
import eventServices from '../../services/event.services'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context'




const NewEventForm = () => {

    const { loggedUser } = useContext(AuthContext)

    const [newtData, setEventData] = useState({
        name: '',
        type: '',
        description: '',
        location: '',//{ type: 'point', coordinate: [longitude, latitude] },
        ageGroup: '',
        organizer: loggedUser?._id
    })


    console.log(loggedUser)

    // const handleInputChange = e => {
    //     const { value, name } = e.currentTarget
    //     setCoasterData({ ...coasterData, [name]: value })   --------esto ejemplo
    //}


    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setEventData({ ...newtData, [name]: value })
    }

    // const handleEventSubmit = e => {

    //     e.preventDefault()


    //     const eventData

    //     eventServices
    //         .createEvent(createEvent)
    //         .then(() => {
    //             response => con

    //         })
    //}
    return (
        <div >
            <Form >
                <Form.Group className="mb-3" controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={newtData.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='description'>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" value={newtData.description} />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId='type'>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type="type" name="type" value={newtData.type} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId='location'>
                            <Form.Label>Lugar</Form.Label>
                            <Form.Control type="text" name="location" value={newtData.location} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId='ageGroup'>
                            <Form.Label>Edad Recomendada</Form.Label>
                            <Form.Control type="number" name="ageGroup" value={newtData.ageGroup} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId='organizer'>
                            <Form.Label>Edad Recomendada</Form.Label>
                            <Form.Control type="number" name="organizer" value={newtData.organizer} />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Crear nuevo evento</Button>
                </div>
            </Form>
        </div>
    )
}



export default NewEventForm