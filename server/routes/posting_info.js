const app = require("express").Router();
const queries = require("../queries/posting_info");


app.get("/", (request, response) => {
    queries.list().then(data => {
      console.log('data', data);
        response.json(data);
    }).catch(console.error);
});

app.get("/:id", (request, response) => {
    queries.read(request.params.id).then(posting_info => {
        posting_info
            ? response.json({posting_info})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/", (request, response) => {
    queries.create(request.body).then(posting_info => {
        response.status(201).json({posting_info});
    }).catch(console.error);
});

app.delete("/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(posting_info => {
        response.json({posting_info});
    }).catch(console.error);
});

module.exports = app
