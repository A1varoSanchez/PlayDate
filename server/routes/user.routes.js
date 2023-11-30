const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken.guard")

const {
    myProfileHandler,
    addChildHandler,
    getAllUsersHandler,
    addFriendHandler,
    deleteFriend
} = require("../controllers/user.controllers")


router.get('/perfil/:id', verifyToken, myProfileHandler)

router.post('/addchild', verifyToken, addChildHandler)

router.get('/getAllUser', getAllUsersHandler)

router.post('/addFriend', verifyToken, addFriendHandler)

router.post('/deletFriend', verifyToken, deleteFriend)


module.exports = router