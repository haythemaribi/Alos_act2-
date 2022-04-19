const express = require("express");
const app = express();
const port = 3001;

<<<<<<< HEAD
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
=======
// Body parser middleware
app.use(express.json());
// form submmission middleware
app.use(express.urlencoded({ extended: false }));

app.use(express.static("./routes/web"));
app.use("/api/recipes", require("./routes/api/routes/recipes"));

app.listen(port, () => {
  console.log(`Site running on port ${port}`);
>>>>>>> 74f16a9806bc941181a0e3bbc515d232a37b17a5
});
