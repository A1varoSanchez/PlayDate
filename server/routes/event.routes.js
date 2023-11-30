const router = require('express').Router()

const { verifyToken } = require('../middlewares/verifyToken.guard')

const {
    createEventHandler,
    allEventsRender,
    oneEventRender,
    joinEventHandler
} = require('../controllers/event.controllers')


router.post('/create', verifyToken, createEventHandler)

router.get('/getAllEvents', allEventsRender)

router.get("/getOneEvent/:event_id", oneEventRender)

router.post("/joinEvent", verifyToken, joinEventHandler)


module.exports = router