const express = require("express");
const mongoose = require("mongoose");
const bodyParser  = require('body-parser');
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.use('/public', express.static('public'));


require("dotenv").config();

const PORT = process.env.PORT || 8070;


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParse: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("MongoDB connection success!");
})

const paymentsRouter = require("./routes/payments.js");

app.use("/payment",paymentsRouter);

app.listen(PORT, () => {
    console.log(`server is up and running on port number ${PORT}`)
})