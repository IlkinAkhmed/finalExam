import express from "express";
import cors from "cors";
import mongoose, { connect, model } from "mongoose";
const app = express();
const port = 5100;

app.use(cors());
app.use(express.json());
const { Schema } = mongoose;
const productSchema = new Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
});
const Products = model("FinalExam", productSchema);

app.get("/products", async (req, res) => {
  try {
    const product = await Products.find({});
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findById(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Products.findByIdAndDelete(id);
    res.status(200).send("Product Created");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/products", async (req, res) => {
  try {
    const product = new Products(req.body);
    await product.save();
    res.status(200).send("Product Created");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
connect("mongodb+srv://Test:test123@cluster0.ghwwmer.mongodb.net/");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
