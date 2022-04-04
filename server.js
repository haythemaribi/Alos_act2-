const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("./routes/web"));
app.use("/api/recipes", require("./routes/api/recipes"));

app.listen(port, () => {
  console.log(`Site running on port ${port}`);
});
