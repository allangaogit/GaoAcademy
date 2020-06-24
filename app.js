const express = require("express");
const app = new express();
const cors = require("cors");
const pool = require("./js/db.js")


//middleware
app.use(cors());
app.use(express.json()); //let's us access req.body
app.set("view engine", "ejs");

//routes

app.get("/", (req, res) =>{
    res.render("index");
});










app.listen(5000, () => {
    console.log("Server has started on port 5000")
});