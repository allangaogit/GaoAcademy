const express = require("express");
const app = new express();
const cors = require("cors");
const pool = require("./js/db.js")
const lessons = require("./routes/lessons")


//middleware
app.use(cors());
app.use(express.json()); //let's us access req.body
app.set("view engine", "ejs");
app.use("/lessons", lessons);
app.use( express.static( "public" ) );
app.use( express.static( "views/partials" ));

//routes

app.get("/", (req, res) =>{
    res.render("index");
});

app.get("/birthday", (req, res) =>{
    res.render("birthday");
});


app.listen(5000, () => {
    console.log("Server has started on port 5000")
});