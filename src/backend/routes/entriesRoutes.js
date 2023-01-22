const router = require("express").Router();
const EntriesSchema = require("./models/entriesModel");

router.get("/", (request, response) => {
    EntriesSchema.find().then(data => response.json(data)).catch(error => response.status(400).json(error));
});

router.post("/add", (request, response) => {

    const NewEntriesSchema = new EntriesSchema(
        {
            description: request.body.description,
            startTime: request.body.startTime,
            endTime: request.body.endTime,
            timeBetween: request.body.timeBetween
        }
    );

    NewEntriesSchema.save().then(newData => response.json(newData)).catch(error => response.status(400).json(error));

});

router.put("/edit/:id", (request, response) => {
    EntriesSchema.findByIdAndUpdate(request.params.id, request.body).then(() => response.send(`id ${request.params.id} updated`)).catch(error => response.status(400).json(error));
});

router.delete("/remove/:id", (request, response) => {
    EntriesSchema.findByIdAndDelete(request.params.id).then(() => response.send(`id ${request.params.id} deleted`)).catch(error => response.status(400).json(error));
});

module.exports = router;