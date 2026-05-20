import express from "express";
import sum from "./sum.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});


app.get("/home", async (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.get("/getsum/:a/:b", async (req, res) => {
    const { a, b } = req.params;
    const result = sum(Number(a), Number(b));
    res.json({
        result: result
    });
});