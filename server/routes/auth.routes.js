const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken.guard")

const {
    createUserHandler,
    loginHandler,
    verifyt
} = require("../controllers/auth.controllers")


router.post('/signup', createUserHandler)

router.post('/login', loginHandler)

router.get('/verify', verifyToken, verifyt)


module.exports = router