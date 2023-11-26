import axios from 'axios'

class EventService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/event`
        })
    }

    saveEvent(event, user) {
        return this.api.post(`/Create`, { event, user })
    }
}
const eventServices = new EventService()

export default eventServices