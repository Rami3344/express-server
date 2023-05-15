const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const users = ["Mo7sen", "Hamma", "Belgecem"];
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`hello ${users[userId]}, your id is ${req.params.id}`);
});
app.get("/", (req, res) => {
  res.render("public/index");
});
app.post("/users", (req, res) => {
  users.push(req.body.firstName);
  res.send(users);
});
app.listen(4000, () => {
  console.log("Listening to port 4000");
});
