const axios = require("axios");
const db = require("../models");
const path = require("path")

module.exports = function(app) {
    app.get("/api/books", (req,res) => {
        db.Book.find().then(
            data => {
                res.json(data);
            }
        ).catch(
            err => {
                res.json(err);
            }
        );
    });

    app.post("/api/books", (req, res) => {
        console.log(req.body)
        db.Book.create(req.body).then(
            response => {
                res.json({success: response})
            }
        ).catch(
            err => {
                res.json(err);
            }
        )
    })

    app.delete("/api/books/:id", (req,res) => {
        console.log(req.params.id)
        db.Book.findByIdAndDelete(req.params.id).then(
            response => {
                res.json ({success: response})
            }
        ).catch(
            err => {
                res.json(err)
            }
        )
    })

}