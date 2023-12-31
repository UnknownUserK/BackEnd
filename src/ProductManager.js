
// const fs = require("fs");

// class ProductManager {
//   constructor(path) {
//     this.path = path;
//     if (fs.existsSync(path)) {
//       try {
//         let products = fs.readFileSync(path, "utf-8");
//         this.products = JSON.parse(products);
//       } catch (error) {
//         this.products = [];
//       }
//     } else {
//       this.products = [];
//     }
//   }

//   async saveFile(data) {
//     try {
//       await fs.promises.writeFile(
//         this.path,
//         JSON.stringify(data, null, "\t")
//       );
//       return true;
//     } catch (error) {
//       console.log(error);
//       return false;
//     }
//   }

//   async addProduct(product) {
//     if (this.products.length === 0) {
//       product.id = 1;
//     } else {
//       product.id = this.products[this.products.length - 1].id + 1;
//     }

//     this.products.push(product);

//     const respuesta = await this.saveFile(this.products);

//     if (respuesta) {
//       console.log("Producto creado");
//     } else {
//       console.log("Hubo un error al crear un producto");
//     }
//   }

//   getProducts() {
//     console.log(this.products);
//     return this.products;
//   }

//   getProductById(id) {
//     const product = this.products.find((product) => product.id === id);
  
//     if (!product) {
//       console.log("Producto no encontrado");
//       return;
//     }
  
//     return product;
//   }

//   async updateProduct(id, updatedProduct) {
//     const productIndex = this.products.findIndex((product) => product.id === id);
  
//     if (productIndex === -1) {
//       console.log("Producto no encontrado");
//       return;
//     }
  
//     const oldProduct = this.products[productIndex];
//     this.products[productIndex] = { ...oldProduct, ...updatedProduct, id: oldProduct.id };
  
//     const respuesta = await this.saveFile(this.products);
  
//     if (respuesta) {
//       console.log("Producto actualizado");
//     } else {
//       console.log("Hubo un error al actualizar un producto");
//     }
//   }

//   async deleteProduct(id) {
//     const productIndex = this.products.findIndex((product) => product.id === id);
  
//     if (productIndex === -1) {
//       console.log("Producto no encontrado");
//       return;
//     }
  
//     this.products.splice(productIndex, 1);
  
//     const respuesta = await this.saveFile(this.products);
  
//     if (respuesta) {
//       console.log("Producto eliminado");
//     } else {
//       console.log("Hubo un error al eliminar un producto");
//     }
//   }
// }

// class Product {
//   constructor(id, name, price, image) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.image = image;
//   }
// }

// // Pruebas
// const product1 = new Product(1, "Iphone 11", 699, "imgs/1.jpg");
// const product2 = new Product(2, "Iphone 13", 699, "imgs/3.jpg");
// const product3 = new Product(3, "Samsung S22", 699, "imgs/5.jpg");

// const manager = new ProductManager("productos.json");

// // console.log(manager.getProducts());
// manager.addProduct(product1);
// console.log(manager.getProducts());

// manager.addProduct(product2);
// manager.addProduct(product3);
// console.log(manager.getProducts());

// manager.updateProduct(1, { name: "Iphone 11 actualizado" });
// console.log(manager.getProducts());

// manager.deleteProduct(2);
// console.log(manager.getProducts());

const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
    if (fs.existsSync(path)) {
      try {
        let products = fs.readFileSync(path, "utf-8");
        this.products = JSON.parse(products);
      } catch (error) {
        this.products = [];
      }
    } else {
      this.products = [];
    }
  }

  async saveFile(data) {
    try {
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(data, null, "\t")
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async addProduct(product) {
    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }

    this.products.push(product);

    const respuesta = await this.saveFile(this.products);

    if (respuesta) {
      console.log("Producto creado");
    } else {
      console.log("Hubo un error al crear un producto");
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
  
    if (!product) {
      console.log("Producto no encontrado");
      return;
    }
  
    return product;
  }

  async updateProduct(id, updatedProduct) {
    const productIndex = this.products.findIndex((product) => product.id === id);
  
    if (productIndex === -1) {
      console.log("Producto no encontrado");
      return;
    }
  
    const oldProduct = this.products[productIndex];
    this.products[productIndex] = { ...oldProduct, ...updatedProduct, id: oldProduct.id };
  
    const respuesta = await this.saveFile(this.products);
  
    if (respuesta) {
      console.log("Producto actualizado");
    } else {
      console.log("Hubo un error al actualizar un producto");
    }
  }

  async deleteProduct(id) {
    const productIndex = this.products.findIndex((product) => product.id === id);
  
    if (productIndex === -1) {
      console.log("Producto no encontrado");
      return;
    }
  
    this.products.splice(productIndex, 1);
  
    const respuesta = await this.saveFile(this.products);
  
    if (respuesta) {
      console.log("Producto eliminado");
    } else {
      console.log("Hubo un error al eliminar un producto");
    }
  }
}

// module.exports = { ProductManager };

// module.exports = ProductManager;

export default ProductManager;






