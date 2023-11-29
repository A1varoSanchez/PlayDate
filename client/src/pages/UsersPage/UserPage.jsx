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

    const [addFriend, setAddFriend] = useState({
        friends: [],
    })

    const handleFriendSubmit = (idFriend) => {

        userservices
            .addFriend(loggedUser._id, idFriend)
            .then(({ data }) => {
                setAddFriend(data)
            })
            .catch(err => console.log(err))
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
                                <p>{elm._id}</p>

                                <Button onClick={() => handleFriendSubmit(elm._id)}> ADD FRIEND </Button>
                            </div>
                        )
                    })
                }
            </Container>
    )
}


export default UsersPage