const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Mi primer servidor de js")
});

server.listen(8080, () => {
    console.log("Server listening on port 8080");
});