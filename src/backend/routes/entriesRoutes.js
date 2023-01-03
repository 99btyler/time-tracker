const router = require("express").Router();
const EntriesSchema = require("./models/entriesModel");

router.get("/", (request, response) => {
    EntriesSchema.find().then(data => response.json(data)).catch(error => response.status(400).json(error));
});

router.post("/", (request, response) => {

    const NewEntriesSchema = new EntriesSchema(
        {
            description: request.body.description,
            startTime: request.body.startTime,
            endTime: request.body.endTime
        }
    );

    NewEntriesSchema.save().then(newData => response.json(newData)).catch(error => response.status(400).json(error));

});

router.put("/:id", (request, response) => {
    EntriesSchema.findByIdAndUpdate(request.params.id, request.body).then(() => response.json(`id ${request.params.id} updated`)).catch(error => response.status(400).json(error));
});

router.delete("/:id", (request, response) => {
    EntriesSchema.findByIdAndDelete(request.params.id).then(() => response.json(`id ${request.params.id} deleted`)).catch(error => response.status(400).json(error));
});

module.exports = router;