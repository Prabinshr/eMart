const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoute = require("./route/user")
const authRoute = require("./route/auth")
const productRoute = require("./route/product")
const cartRoute = require("./route/cart")
const orderRoute = require("./route/order")
const stripeRoute = require("./route/stripe")
const cors = require("cors")

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("connect database"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors())
app.use(express.json()) 
 
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)
app.use("/api/checkout",stripeRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log("connect backend");
});
