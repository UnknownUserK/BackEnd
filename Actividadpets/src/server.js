import express from 'express'

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta main
app.get('/', (req, res) => {
    res.json
})
