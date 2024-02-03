const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const path = require("path");  // Import the path module
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
}).then(() => {
    console.log('MongoDB Connection successful!');
}).catch((error) => {
    console.error('MongoDB Connection error:', error);
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB Connection successful!');
});

const userRouter = require("./routes/user.js");
app.use("/user", userRouter);

const productRouter = require("./routes/product.js");
app.use("/product", productRouter);

// Use an absolute path for serving static files
const absoluteUploadsPath = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(absoluteUploadsPath));

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
