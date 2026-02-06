const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

app.get("/search", (req, res) => {
    res.send(req.query);
});

app.listen(port, () =>  {
    console.log(`Server run on port:${port}`);
});