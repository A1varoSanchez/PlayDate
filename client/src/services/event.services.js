import axios from 'axios'


class EventService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/event`
        })
    }

    createEvent() {
        return this.api.post(`/create`)
    }
}


const eventServices = new EventService()

export default eventServices