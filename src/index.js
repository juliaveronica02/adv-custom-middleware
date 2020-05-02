const express = require("express");
const app = express();

let jojos = [
  {
    name: "Jotaro Kujo",
    stand: "Star Platinum"
  },
  {
    name: "Joseph Joestar",
    stand: "Hermit Purple"
  },
  {
    name: "Johnny Joestar",
    stand: "Tusk"
  }
];

app.get("/", (req, res, next) => {
  console.log("Access at:", new Date().toLocaleString());
  res.send(jojos);
});

app.listen(5000, () => console.log("listening to port 5000"));
