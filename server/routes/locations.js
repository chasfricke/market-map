const app = require("express").Router();
const queries = require("../queries/locations");


app.get("/", (request, response) => {
    queries.list().then(data => {
      console.log('data', data);
        response.json(data);
    }).catch(console.error);
});

app.get("/:id", (request, response) => {
    queries.read(request.params.id).then(locations => {
        locations
            ? response.json({locations})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/", (request, response) => {
    queries.create(request.body).then(locations => {
        response.status(201).json({locations});
    }).catch(console.error);
});

app.delete("/:id", (request, response) => {
    queries.delete(request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});

app.put("/:id", (request, response) => {
    queries.update(request.params.id, request.body).then(locations => {
        response.json({locations});
    }).catch(console.error);
});

module.exports = app
