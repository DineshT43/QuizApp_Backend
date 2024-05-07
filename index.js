const express = require('express');
const app = express();

// import crypto from "crypto";

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello Geeks...........")
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`server started at port ${PORT}`)
})

// console.log(crypto.randomBytes(64).toString("hex"));