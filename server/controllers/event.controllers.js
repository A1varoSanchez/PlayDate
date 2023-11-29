const Event = require('./../models/Event.model')


//CREATE EVENT
const createEventHandler = (req, res, next) => {

    const { name, type, description, latitude, longitude, ageGroup, messages } = req.body
    const { _id: organizer } = req.payload
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Event
        .create({ name, type, description, location, ageGroup, messages, organizer })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
}

//DISPLAY ALL EVENTS
const allEventsRender = (req, res, next) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

//EVENT DETAILS
const oneEventRender = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .populate('organizer')
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    createEventHandler,
    allEventsRender,
    oneEventRender
}
