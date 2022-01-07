const express = require('express')
const app = express.Router();
const productConteroller = require('../controllers/productControllers')

app.get("/", productConteroller.getProducts);

app.get("/:id",productConteroller.getProductsByid);

app.get("/name/:name",productConteroller.getProductsByName);

app.get("/pirce/:pirce",productConteroller.getProductsByPrice);

app.post("",productConteroller.portProduct);

app.put("/:id",productConteroller.putProduct);

app.patch("/:id",productConteroller.patchProduct);

app.delete("/:id",productConteroller.deleteProduct);

module.exports = app;