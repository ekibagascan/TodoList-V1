//jshint esversion:6

const express = require("express");
const date = require("./date.js");

const app = express();
const toDos = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.use(express.urlencoded());
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {

    res.render("list", {listTitle: date.day, todoList: toDos});

});


app.post("/", (req, res) => {
    console.log(req.body);
    let toDo = req.body.todo;

    if(req.body.list === "Work") {
        workItems.push(toDo);
        res.redirect("/work");
    } else {
        toDos.push(toDo);
        res.redirect("/");
    } 
});

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", todoList: workItems})
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
