const router = require("express").Router();
const { getEntries, addEntry, editEntry, removeEntry } = require("./controllers/entriesController");

router.get("/", getEntries);
router.post("/", addEntry);
router.put("/:id", editEntry);
router.delete("/:id", removeEntry);

module.exports = router;