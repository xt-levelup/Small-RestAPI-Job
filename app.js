const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded());   //  <=== x-www-form-urlencoded  <form>

app.use(bodyParser.json()); //   <=== application/json

// Khắc phục lỗi CORS   (ta có thể cài đặt CORS để thay thế tiện hơn)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

app.use("/feed", feedRoutes);

app.listen(8080);
