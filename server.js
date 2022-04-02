const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use("/api/recipes", require("./routes/api/recipes"));
app.listen(port, () => {
  console.log(`Site running on port ${port}`);
});
