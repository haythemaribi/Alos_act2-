const express = require("express");
const app = express();
const port = 3001;

// Body parser middleware
app.use(express.json());
// form submmission middleware
app.use(express.urlencoded({ extended: false }));

app.use(express.static("./routes/web"));
app.use("/api/recipes", require("./routes/api/recipes"));

app.listen(port, () => {
  console.log(`Site running on port ${port}`);
});
