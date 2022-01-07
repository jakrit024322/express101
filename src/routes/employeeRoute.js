const express = require('express')
const app = express.Router();
const employeeControllers = require('../controllers/employeeControllers')

app.get("/", employeeControllers.getemployee);

app.get("/:id",employeeControllers.getemployeeByid);

app.get("/tax/:sal",employeeControllers.getemployeeBysal);

app.get("/retire/:age",employeeControllers.getemployeeByage);

app.post("/",employeeControllers.portemployee);


module.exports = app;