import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"
import userservices from "../../services/user.services"
import { Button, Form } from "react-bootstrap"


const AddChildForm = ({ setShowModal, refreshProfile }) => {

    const { loggedUser } = useContext(AuthContext)
    const { _id } = useParams()

    const [addChild, setAddChild] = useState({
        children: [{
            gender: '',
            birth: ''
        }],
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setAddChild({ ...addChild, [name]: value })
    }

    const handleEventSubmit = e => {

        e.preventDefault()

        if (loggedUser._id === _id) {
            userservices
                .addChild(addChild)
                .then(({ data }) => {
                    setAddChild(data)
                    setShowModal(false)
                    refreshProfile()
                })
                .catch(err => console.log(err))
        }
    }

    return (

        <Form onSubmit={handleEventSubmit}>
            <Form.Group className="mb-3" controlId="birthday">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control type="date" name="birthday" value={addChild.children.birthday} onChange={handleInputChange} />
            </Form.Group>

            <Form.Select className="mb-3" aria-label="Default select example" name="gender" value={addChild.children.gender} onChange={handleInputChange}>
                <option type="text">Selecciona género</option>
                <option type="text" value="niño">Niño</option>
                <option type="text" value="niña">Niña</option>
            </Form.Select>

            <div className="d-grid">
                <Button variant="dark" type="submit">Añadir hijo/a</Button>
            </div>
        </Form>


    )
}

export default AddChildForm