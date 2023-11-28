const router = require('express').Router()

const Event = require('./../models/Event.model')


router.post('/event/create', (req, res, next) => {
    const { name, type, description, location, ageGroup, messages, organizer } = req.body

    Event
        .create({ name, type, description, location, ageGroup, messages, organizer })
        .then(() => res.status(200))
        .catch(err => console.log(err))
})


module.exports = router


