const express = require("express");
const app = express();
const port = 3001;
const userRouters=require('./routes/api/route/user-router')
const connection = new Sequelize("dbrecipes", "root", "pass", {
  host: "127.0.0.1",
  dialect: "sqlite"
})
connection.sync()
    .then(() => {
        console.log("Connection to DB was successful");
    })
    .catch(err => {
        console.error("Unable to connect to DB", err);
    });
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.use('/',userRouters);

// Body parser middleware
app.use(express.json());
// form submmission middleware
app.use(express.urlencoded({ extended: false }));

app.use(express.static("./routes/web"));
app.use("/api/recipes", require("./routes/api/routes/recipes"));
connection.sequelize.sync().then(()=>{
  app.listen(port, () => {console.log(`Server is running on port ${port}`);})
})
