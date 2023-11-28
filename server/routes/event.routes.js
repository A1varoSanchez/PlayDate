const router = require('express').Router()

const { verifyToken } = require('../middlewares/verifyToken');
const Event = require('./../models/Event.model')


router.post('/event/create', verifyToken, (req, res, next) => {
    const { name, type, description, location, ageGroup, messages } = req.body
    const { _id: organizer } = req.payload

    Event
        .create({ name, type, description, location, ageGroup, messages, organizer })
        .then(() => res.status(200))
        .catch(err => console.log(err))
})


module.exports = router