const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", (req, res) => {
  const { fname, lname, prn } = req.body;
  res.redirect(`/${prn}`);
});

app.get("/:prn", (req, res) => {
  const { prn } = req.params;
  res.render(`resumes/it3`, { prn });
});

app.listen(3000, () => {
  console.log("YES");
});
