const router = require('express').Router()

const [readAllNotes, addNote] = require('./../db/notes')

router.get("/", async (req, res) => {
    const allNotes = await readAllNotes()
    res.json({
        data: allNotes
    })
})

router.post("/", async (req, res) => {
    const title = req.body.title
    const content = req.body.title
    const noteAdd = await addNote(title, content)
    res.json({
        message: "Added",
        title: title,
        hello: "hi"
    })
})

module.exports = router