import { Form, Button, Row, Col } from 'react-bootstrap'
import eventServices from '../../services/event.services'
import { useState } from 'react'




const NewEventForm = () => {

    const [newtData, setEventData] = useState({
        name: '',
        type: '',
        description: '',
        location: '',//{ type: 'point', coordinate: [longitude, latitude] },
        ageGroup: '',
        organizer: ''
    })

    const [user, setUser] = useState({})

    // const handleInputChange = e => {
    //     const { value, name } = e.currentTarget
    //     setCoasterData({ ...coasterData, [name]: value })   --------esto ejemplo
    // }

    // const loginUser = () => { }

    // const handleInputChange = e => {



    // }

    // const handleEventSubmit = e => {

    //     e.preventDefault()

    //     const userId = user._id
    //     const eventData = { ...newtData, organizer: userId }

    //     eventServices
    //         .create(eventData)
    //         .then(() => {response=> con

    //         })
    // }
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
                </Row>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Crear nuevo evento</Button>
                </div>
            </Form>
        </div>
    )
}



export default NewEventForm