 const express = require("express")
 const app = express()

 app.get("/", (req, res) => {
    res.json({"home": "This is the home page"})
 })

 app.listen(5000, () => {
    console.log("Server started on port 5000")
 })