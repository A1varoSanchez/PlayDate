import { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import userservices from '../../services/user.services'
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
            .then(({ data }) => {
                setuser(data)

            })
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
                loaduser()
            })
            .catch(err => console.log(err))
    }

    const [deletedFriend, setdeletedFriend] = useState({
        friends: [],
    })

    const handledeleteSubmit = (friendId) => {
        userservices
            .deletedFriend(loggedUser._id, friendId)
            .then(({ data }) => {
                setdeletedFriend(data)
                loaduser()
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
                                {
                                    elm.friends.includes(loggedUser._id)
                                        ?
                                        <Button onClick={() => handledeleteSubmit(elm._id)}> DELETE FRIEND </Button>
                                        :
                                        <Button onClick={() => handleFriendSubmit(elm._id)}> ADD FRIEND </Button>
                                }
                            </div>
                        )
                    })
                }
            </Container>
    )
}


export default UsersPage