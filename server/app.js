const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors({origin: true}))
app.use(bodyParser.json());

app.use("/locations", require('./routes/locations'))
app.use("/posting_info", require('./routes/posting_info'))

app.use((request, response) => {
    response.status(404).send({message: 'url not found'});
});

app.use((err, req, res, next) => {
    console.error('ERROR:', err);
    res.status(500).send({message: err.message, stack: err.stack})
});

module.exports = app;
