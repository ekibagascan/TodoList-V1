//jshint esversion:6

const express = require("express");

const app = express();
let toDos = ["Buy Food", "Cook Food", "Eat Food"];

app.use(express.urlencoded());
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    
    let today = new Date();
    let options = { 
        weekday: "long",
        month: "long",
        day: "numeric"
    };
    let day = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

    res.render("list", {thisDay: day, todoList: toDos});
    //res.send();
})

app.post("/", (req, res) => {
    let toDo = req.body.todo;
    toDos.push(toDo);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})