const router = require('express').Router()

const { verifyToken } = require('../middlewares/verifyToken.guard')

const {
    createEventHandler,
    allEventsRender,
    oneEventRender
} = require('../controllers/event.controllers')


router.post('/create', verifyToken, createEventHandler)

router.get('/getAllEvents', allEventsRender)

router.get("/getOneEvent/:event_id", oneEventRender)


module.exports = router