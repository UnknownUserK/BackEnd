// import express from "express";

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const usuarios = [];

// app.get("/", (req, res) => {
//   res.json({
//     mensaje: "Bienvenido a mi api",
//   });
// });

// app.get("/usuarios", (req, res) => {
//   res.json({
//     usuarios,
//   });
// });

// app.get("/usuarios/:id", (req, res) => {
//   const { id } = req.params;

//   const usuario = usuarios.find((user) => user.id === Number(id));

//   if (!usuario) {
//     return res.json({
//       error: "User does not exists",
//     });
//   }

//   res.json({
//     usuario,
//   });
// });

// app.post("/usuarios", (req, res) => {
//   console.log(req.body);

//   const { id, username, name } = req.body;

//   // const usuario = {};

//   usuarios.push({
//     id: Number(id),
//     username,
//     name,
//   });

//   res.json({
//     status: "Creado",
//   });
// });

// app.put("/usuarios/:id", (req, res) => {
//   const { id } = req.params;

//   const { username, name } = req.body;

//   const index = usuarios.findIndex((user) => user.id === Number(id));

//   if (index === -1) {
//     return res.json({
//       error: "User not found",
//     });
//   }

//   usuarios[index] = {
//     id: Number(id),
//     username,
//     name,
//   };

//   res.json({
//     status: "Actualizado",
//     usuario: {
//       id: Number(id),
//       username,
//       name,
//     },
//   });
// });

// app.delete("/usuarios/:id", (req, res) => {
//   const { id } = req.params;

//   const index = usuarios.findIndex((user) => user.id === Number(id));

//   if (index === -1) {
//     return res.json({
//       error: "User not found",
//     });
//   }

//   usuarios.splice(index, 1);

//   res.json({
//     status: "Usuario Eliminado",
//   });
// });

// app.listen(5000, () => console.log("Server listening on port 5000"));

import express from "express";
import ProductManager from './ProductManager.js'; 
// import { Loader } from "./utils/multer.js";

const app = express();
const productManager = new ProductManager('products.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    mensaje: "Bienvenido a mi api",
  });
});

app.get("/products", async (req, res) => {
  const limit = req.query.limit;
  let products = await productManager.getProducts();
  
  if (limit) {
    products = products.slice(0, limit);
  }

  res.json({
    products,
  });
});

app.get("/products/:pid", async (req, res) => {
  const { pid } = req.params;
  const product = await productManager.getProductById(Number(pid));

  if (!product) {
    return res.json({
      error: "Product does not exists",
    });
  }

  res.json({
    product,
  });
});

// LOADER

// app.post('/', loader.single ('image'),  (req, res) => {
//   if(!req.file) {
//     return res.status(500).json({
//       error: "Hubo un error al subir el archivo"
//     });
//   }
// })

console.log(req.file);

console.log(req.body)

res.json({})

app.listen(8080, () => console.log("Server listening on port 8080"));
