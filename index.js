const express = require("express");
const cors = require("cors");

const quizRouter = require("./router/quiz.router");
const categoriesRouter = require("./router/categories.router");
const { loginRouter, signupRouter } = require('./router/auth.router');
const routeNotfound = require("./middleware/routeNotFound");
const quizzes = require("./db/quizzes");



const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.json(quizzes);
})

app.use("/categories", categoriesRouter);
app.use("/quiz", quizRouter);
app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);
app.use(routeNotfound);

app.listen(process.env.PORT || PORT, () => {
    console.log("server started.....");
})


/* To generate JWT from crypto dependency - 
 import crypto from "crypto";
 console.log(crypto.randomBytes(64).toString("hex"));
*/