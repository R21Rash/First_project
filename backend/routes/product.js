const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");       
const Product = require("../models/Product");

const router = express.Router();

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/"); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname); // Set the file name to be unique
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Set a file size limit (in this case, 5 MB)
  },
  fileFilter: function (req, file, cb) {
    // Check file type to allow only certain file types, e.g., images
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

// Define the route for uploading a product with one image
router.post("/upload", upload.single("imgSrc"), async (req, res) => {
  try {
    const { name, genre, description, price } = req.body;

    // Check if req.file is defined
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Assuming req.file.path contains the absolute path, extract the filename
    const imagePath = req.file.filename;

    const newProduct = await Product.create({
      name,
      genre,
      description,
      price,
      imgSrc: imagePath,
    });

    res.status(201).json({ message: "Product uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});












router.get('/man', async (req, res) => {
  try {
    const manProducts = await Product.find({ genre: 'Man' });
    res.status(200).json(manProducts);
  } catch (error) {
    console.error('Error fetching man products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});












router.put("/update/:id", upload.single("imgSrc"), async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, genre, description, price } = req.body;

    let updatedProductData = {
      name,
      genre,
      description,
      price,
    };

    // Check if req.file is defined
    if (req.file) {
      // Assuming req.file.path contains the absolute path, extract the filename
      const imagePath = req.file.filename;
      updatedProductData.imgSrc = imagePath;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedProductData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});




module.exports = router;
