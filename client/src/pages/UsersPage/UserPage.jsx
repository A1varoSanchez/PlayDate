import { useContext, useEffect, useState } from 'react'
//import eventServices from '../../services/event.services'
import { Button, Container, Form } from 'react-bootstrap'
import userservices from '../../services/user.services'
//import AddFriendsForm from '../../components/AddFriend/AddFriend'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'




const UsersPage = () => {

    const { loggedUser } = useContext(AuthContext)
    const [user, setuser] = useState()

    useEffect(() => {
        loaduser()
    }, [])

    const loaduser = () => {
        userservices
            .getAllUser()
            .then(({ data }) => setuser(data))
            .catch(err => console.log(err))
    }



    //----------------------------------------------------------------------------------------------------------------

    const { _id } = useParams()

    const [addFriend, setAddFriend] = useState({
        friends: '',
    })


    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setAddFriend({ ...addFriend, [name]: value })
    }

    const handleFriendSubmit = e => {

        e.preventDefault()

        if (loggedUser._id === _id) {
            userservices
                .addFriend(addFriend.friends)
                .then(({ data }) => {
                    console.log('-----------------------------------------servicio')
                    setAddFriend(data)
                })
                .catch(err => console.log(err))
        }
    }

    return (
        !user ?

            <h1>holaaaa</h1>
            :


            <Container>
                <h1>usuarios</h1>
                <hr />
                {
                    user.map((elm, i) => {
                        return (
                            <div key={elm._id}>
                                <p>{elm.username}</p>
                                <Form onSubmit={handleFriendSubmit}>
                                    <Form.Group className="mb-3" controlId="friends">
                                        <Form.Label>{elm._id}</Form.Label>
                                        <Form.Control type="text" value={addFriend.friends} onChange={handleInputChange} name="friends" />
                                    </Form.Group>
                                    <div className="d-grid">
                                        <Button variant="dark" type="submit">Acceder</Button>
                                    </div>
                                </Form>
                            </div>
                        )
                    })

                }
            </Container>

    )
}


export default UsersPage