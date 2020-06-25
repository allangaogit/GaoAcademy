"use strict";

const express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.render("lessons")
})

router.get("/:lesson", (req, res) => {
    res.render("./lesson/unit1/" + req.params.lesson)
})

module.exports = router;