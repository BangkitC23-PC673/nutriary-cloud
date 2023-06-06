const express = require('express');
const usersRoutes = require('./usersRoutes')
const foodRoutes = require('./foodRoutes')
const app = express();
const port = 3000

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use("/users", usersRoutes);
app.use("/food", foodRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));