const { response } = require("express")
const User = require("../models/User.model")

//USER PROFILE
const myProfileHandler = (req, res, next) => {

    const { _id } = req.payload

    User
        .findById(_id)
        .populate('friends')
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
    const { friends, loggedId } = req.body

    Promise.all
        ([
            User.findByIdAndUpdate(loggedId, { $addToSet: { friends } }),
            User.findByIdAndUpdate(friends, { $addToSet: { friends: loggedId } })
        ])
        .then(responses => res.json(responses))
        .catch(err => next(err))
}

<<<<<<< HEAD
const deleteFriend = (req, res, next) => {
    const { friendId, loggedId } = req.body

    Promise.all
        ([
            User.findByIdAndUpdate(loggedId, { $pull: { friends: friendId } }),
            User.findByIdAndUpdate(friendId, { $pull: { friends: loggedId } })
        ])
        .then(responses => res.json(responses))
        .catch(err => next(err))
}

=======
>>>>>>> 7f29edd499bc97842c19467f8f7e1ffff693684d

module.exports = {
    myProfileHandler,
    addChildHandler,
    getAllUsersHandler,
    addFriendHandler,
    deleteFriend

}