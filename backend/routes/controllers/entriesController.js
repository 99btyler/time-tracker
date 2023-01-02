
const EntriesSchema = require("../models/entriesModel");

// GET /entries
const getEntries = (request, response) => {
    EntriesSchema.find().then(data => response.json(data)).catch(error => response.status(400).json(error));
}

// POST /entries
const addEntry = (request, response) => {

    const NewEntriesSchema = new EntriesSchema(
        {
            description: request.body.description,
            startTime: request.body.startTime,
            endTime: request.body.endTime
        }
    );

    NewEntriesSchema.save().then(newData => response.json(newData)).catch(error => response.status(400).json(error));

}

// PUT /entries/id
const editEntry = (request, response) => {
    EntriesSchema.findByIdAndUpdate(request.params.id, request.body).then(() => response.json(`id ${request.params.id} edited`)).catch(error => response.status(400).json(error));
}

// DELETE /entries/id
const removeEntry = (request, response) => {
    EntriesSchema.findByIdAndDelete(request.params.id).then(() => response.json(`id ${request.params.id} removed`)).catch(error => response.status(400).json(error));
}

module.exports = { getEntries, addEntry, editEntry, removeEntry }