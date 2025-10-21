const express = require("express")

const app = express()

app.get("/home", (_req, res) => {
    res.status(200).send("Ala ma kota!")
})

module.exports = app