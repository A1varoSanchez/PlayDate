module.exports = app => {

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

    const eventRoutes = require('./event.routes')
    app.use('/api/event', eventRoutes)

}