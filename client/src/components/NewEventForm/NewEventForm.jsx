import { Form, Button, Row, Col } from 'react-bootstrap'
import eventServices from '../../services/event.services'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context'


const NewEventForm = ({ eventFinal }) => {

    const { loggedUser } = useContext(AuthContext)

    const [newData, setEventData] = useState({
        name: '',
        type: 'popino',
        description: '',
        location: '',//{ type: 'point', coordinate: [longitude, latitude] },
        ageGroup: 3 - 6,
        organizer: ''
    })

    useEffect(() => {
        if (loggedUser && loggedUser._id) {
            setEventData(prevData => ({
                ...prevData,
                organizer: loggedUser._id
            }));
        }
    }, [loggedUser])

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setEventData({ ...newData, [name]: value })
    }

    // const handleEventSubmit = e => {

    e.preventDefault()
    console.log('-------------------------------------------------', newData)
    eventServices
        .createEvent(newData)
        .then(() => {
            eventFinal()
        })
        .catch(err => console.log(err))
}

return (
    <div >
        <Form onSubmit={handleEventSubmit}>
            <Form.Group className="mb-3" controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={newData.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId='description'>
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" name="description" value={newData.description} onChange={handleInputChange} />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId='type'>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control type="type" name="type" value={newData.type} onChange={handleInputChange} />
                    </Form.Group>
                </Col>
                {/* <Col>
                        <Form.Group className="mb-3" controlId='location'>
                            <Form.Label>Lugar</Form.Label>
                            <Form.Control type="text" name="location" value={newData.location} onChange={handleInputChange} />
                        </Form.Group>
                    </Col> */}

                {/* <Col>
                        <Form.Group className="mb-3" controlId='ageGroup'>
                            <Form.Label>Edad Recomendada</Form.Label>
                            <Form.Control type="number" name="ageGroup" value={newData.ageGroup} onChange={handleInputChange} />
                        </Form.Group>
                    </Col> */}

            </Row>

            <div className="d-grid">
                <Button variant="dark" type="submit">Crear nuevo evento</Button>
            </div>
        </Form>
    </div>
)
}



export default NewEventForm