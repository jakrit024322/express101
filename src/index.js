require('dotenv').config({ path: './config.env'});
const exprees = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { send } = require('express/lib/response');
const port = process.env.PORT || 4002;

const productRoute = require("./routes/productRoute");

const employeeRoute = require("./routes/employeeRoute");

const app = exprees();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/product", productRoute);
app.use("/employee", employeeRoute);

// app.put();
// app.patch();
// app.delete();
//Routing Table
app.get("/",(req, res)=>{
    
    res.send("Hello from index");
});

// app.get("/login",(req, res)=>{
//     res.send("Hello from login");
// // });

// app.get("/product", (req, res)=>{
//     res.send(`Product All : ${req.params.id}`);
// });

// app.get("/product/:id", (req, res)=>{
//     res.send(`Product ID : ${req.params.id}`);
// });

// app.get("/product/name/:name", (req, res)=>{
//     res.send(`Product Name : ${req.params.name}`);
// });

// app.get("/product/pirce/:pirce", (req, res)=>{
//     res.send(`Product pirce : ${req.params.pirce}`);
// });

// app.post("/product", (req, res)=>{
//     res.send(`add product id : ${req.body.id}, name: ${req.body.name}`);
// });

// app.put("/product/:id",(req, res)=>{
//     res.send(`put product id : ${req.params.id}`);
// });

// app.patch("/product/:id",(req, res)=>{
//     res.send(`patch product id : ${req.params.id}`);
// });

// app.delete("/product/:id",(req, res)=>{
//     res.send(`delete product id : ${req.params.id}`);
// });








app.listen(port, ()=> {
    console.log(`App is running on port ${port}`)
});


   
