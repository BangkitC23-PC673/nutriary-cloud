const express = require('express');
//const usersRoutes = require('./usersRoutes')
//const foodRoutes = require('./eatRoutes')
const app = express();
//const port = 3000

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Response success!");
});

//app.use("/users", usersRoutes);
app.use(require("./eatRoutes"));

const server = app.listen(process.env.PORT || 8000, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`)
});