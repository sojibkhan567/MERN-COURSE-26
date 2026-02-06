const express = require("express");
const app = express();

const port = 3000;
// use json or urlencode data
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//set view ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("welcome");
});

app.post("/user", (req, res) => {
    res.send(req.body);
});

app.listen(port, () =>  {
    console.log(`Server run on port:${port}`);
});