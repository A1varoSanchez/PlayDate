import axios from 'axios'


class UserService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/user`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    findUser(_id) {
        return this.api.get(`/perfil/${_id}`)
    }

    addChild(children) {
        return this.api.post(`/addchild`, children)
    }

    getAllUser() {
        return this.api.get('/getAllUser')
    }

    addFriend(friends) {
        return this.api.post('/addFriend', { friends })
    }


}

const userservices = new UserService()

export default userservices