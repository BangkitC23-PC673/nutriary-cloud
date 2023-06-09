const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Response success!");
});

app.use(require("./eatRoutes"));

const server = app.listen(process.env.PORT || 3000, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`)
});