// const express = require('express');
import express from "express";

const app = express ();

app.get("/", (request, response) => {
    response.send("<h1> Hola mundo desde express </h1>")
});

app.get ("/bienvenido", (request, response) => {
    response.send("<h1 style='color: blue'>Bienvenido </h1>")
});

app.get("/usuario", (request, response) => {
    response.json({
        nombre: "Jorge",
        apellido: "Gonzales",
        edad: 23,
    })
});

app.listen(8080, () => console.log("Server listening on port 8080"));