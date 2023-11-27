import axios from 'axios'


class EventService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/event`
        })
    }

    createEvent(eventData) {
        return this.api.post(`/event/create`, eventData)
    }
}


const eventServices = new EventService()

export default eventServices