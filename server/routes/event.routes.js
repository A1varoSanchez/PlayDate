const router = require('express').Router()


const Event = require('./../models/Event.model')
const User = require('./../models/User.model')


router.post('/event/Create', (req, res, next) => {

    const { name, type, description, location, ageGroup, messages } = req.body
    const user_id = req.currentUser._id

    Promise.all(
        [
            Event.create({ name, type, description, location, ageGroup, messages }),
            User.findById({ user: user_id })
        ]
    )
        .then(([event, user]) => res.status(200).json({ event, user }))
        .catch(err => console.log(err))

})

module.exports = router

