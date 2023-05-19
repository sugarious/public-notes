const express = require("express")
const app = express()
const cors = require('cors');

const bodyparser = require("body-parser")


app.use(cors());
app.use(bodyparser.json())


app.get("/", (req, res) => {
    res.json({
        message: "Hello"
    })
})

const routeNote = require('./routes/notes')

app.use("/notes", routeNote)

app.listen(3000)