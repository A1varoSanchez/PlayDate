const User = require("../models/User.model")

//USER PROFILE
const myProfileHandler = (req, res, next) => {

    const { _id } = req.payload

    User
        .findById(_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

//ADD CHILD TO USER PROFILE
const addChildHandler = (req, res, next) => {

    const { _id } = req.payload
    const { gender, birthday } = req.body

    const children = { gender, birthday }

    User
        .findByIdAndUpdate(_id, { $push: { children } })
        .then(response => res.json(response))
        .catch(err => next(err))
}

//GET ALL USERS
const getAllUsersHandler = (req, res, next) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

//ADD FRIEND TO USER PROFILE
const addFriendHandler = (req, res, next) => {

    const { _id } = req.payload
    const { friends } = req.body
    console.log(friends)
    User
        .findByIdAndUpdate(_id, { $push: { friends } })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    myProfileHandler,
    addChildHandler,
    getAllUsersHandler,
    addFriendHandler
}