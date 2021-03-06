const router = require("express").Router()

const UserSchema = require("../models/UserSchema.js")

// GET
router.get("/", (request, response) => {
    UserSchema.find().then(data => response.json(data)).catch(error => response.status(400).json("Error: " + error))
})

router.get("/:id", (request, response) => {
    UserSchema.findById(request.params.id).then(data => response.json(data)).catch(error => response.status(400).json("Error: " + error))
})

// POST
router.post("/add", (request, response) => {

    const newUserSchema = new UserSchema({
        username: request.body.username,
        descriptions: request.body.descriptions,
        timeRanges: request.body.timeRanges,
        totalTimes: request.body.totalTimes
    })

    newUserSchema.save().then(newData => response.json(newData)).catch(error => response.status(400).json("Error: " + error))

})

router.post("/edit/:id", (request, response) => {

    UserSchema.findById(request.params.id).then(userSchema => {

        userSchema.username = request.body.username
        userSchema.descriptions = request.body.descriptions
        userSchema.timeRanges = request.body.timeRanges
        userSchema.totalTimes = request.body.totalTimes

        userSchema.save().then(() => response.json(`UserSchema ${request.params.id} updated`)).catch(error => response.status(400).json("Error: " + error))

    }).catch(error => response.status(400).json("Error: " + error))

})

// DELETE
router.delete("/delete/:id", (request, response) => {
    UserSchema.findByIdAndDelete(request.params.id).then(() => response.json(`UserSchema ${request.params.id} deleted`)).catch(error => response.status(400).json("Error: " + error))
})

module.exports = router