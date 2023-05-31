const express = require('express');
const nutriaryRoutes = require('./routes')
const app = express();
const port = 3000

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use("/nutriary", nutriaryRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));