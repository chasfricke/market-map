const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/locations", require('./routes/locations'))
app.use("/posting_info", require('./routes/posting_info'))

app.use((request, response) => {
    response.send(404);
});

module.exports = app;
