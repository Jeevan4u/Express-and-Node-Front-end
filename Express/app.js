const { json } = require("body-parser");
const dotenv = require("dotenv").config();
const express = require("express");
const multer = require("multer");
const fs = require("fs");
let app = express();
let jtw = require("jsonwebtoken"); //jwt
let products = JSON.parse(fs.readFileSync("./data/products.json"));
let users = JSON.parse(fs.readFileSync("./data/userData.json"));
let cors = require("cors");
const path = require("path");
const exp = require("constants");

app.use(cors());
app.use(express.json());
app.use("/files", express.static("files"));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/files");
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, filename);
  },
});

app.post("/api/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    const existingUser = await users.find((user) => user.email === email);
    if (!existingUser) {
      return res.status(400).json({ message: "User dosen't exists" });
    }
    const matchPassword = await users.find(
      (user) => user.password === password
    );
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    const token = jtw.sign(email, process.env.ACCESS_TOKEN_SECRET);
    res.status(201).json({
      message: "Login Successfull",
      token: token,
    });
  } catch (error) {
    throw error;
  }
});

//GET - api/products
app.get("/api/products", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      products: products,
    },
  });
});

const uploads = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1048576, //1MB
  // },
});
//POST - api/products
app.post(
  "/api/products",
  uploads.any(),
  authenticateToken,
  async (req, res) => {
    try {
      let imageLink = req.files[0].originalname;
      let newID = products[products.length - 1].id + 1;

      let newProduct = Object.assign(
        { id: newID, imageLink: imageLink },
        req.body
      );
      products.push(newProduct);
      fs.writeFile("./data/products.json", JSON.stringify(products), (err) => {
        res.status(201).json({
          status: "success",
          data: {
            product: newProduct,
          },
        });
      });
    } catch (error) {
      throw error;
    }
  }
);

//POST -api/products/:id
app.get("/api/products/:id", authenticateToken, (req, res) => {
  const id = req.params.id * 1;
  let product = products.find((el) => el.id === id);
  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      product: product,
    },
  });
});

//PUT - api/products/:id

app.patch(
  "/api/products/:id",

  authenticateToken,
  async (req, res) => {
    try {
      const id = req.params.id * 1;
      let updateToProduct = products.find((el) => el.id === id);
      let indexofUpdateProduct = products.indexOf(updateToProduct);
      let updatedProduct = Object.assign(updateToProduct, req.body);
      products[indexofUpdateProduct] = updatedProduct;
      fs.writeFile("./data/products.json", JSON.stringify(products), (err) => {
        res.status(200).json({
          status: "success",
          data: {
            product: updatedProduct,
          },
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
);

//AUTHENTICATION
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (authHeader == null) return res.sendStatus(401);

  jtw.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(3000, () => {
  console.log("lisining to port 3000");
});
