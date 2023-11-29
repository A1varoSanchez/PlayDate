const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const User = require("../models/User.model")


router.get('/perfil/:id', verifyToken, (req, res, next) => {

    const { _id } = req.payload

    User
        .findById(_id)
        .then(response => res.json(response))
        .catch(err => next(err))

})


router.post('/addchild', verifyToken, (req, res, next) => {

    const { _id } = req.payload
    const { gender, birthday } = req.body

    const children = { gender, birthday }

    User
        .findByIdAndUpdate(_id, { $push: { children } })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/getAllUser', (req, res, next) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/addFriend', verifyToken, (req, res, next) => {

    const { _id } = req.payload
    const { friends } = req.body
    console.log(friends)
    User
        .findByIdAndUpdate(_id, { $push: { friends } })
        .then(response => res.json(response))
        .catch(err => next(err))
})





module.exports = router