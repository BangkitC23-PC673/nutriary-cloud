const express = require('express');
//const usersRoutes = require('./usersRoutes')
//const foodRoutes = require('./eatRoutes')
const app = express();
const port = 3000

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!");
});

//app.use("/users", usersRoutes);
app.use(require("./eatRoutes"));

app.listen(port, () => console.log(`App listening on port ${port}`));