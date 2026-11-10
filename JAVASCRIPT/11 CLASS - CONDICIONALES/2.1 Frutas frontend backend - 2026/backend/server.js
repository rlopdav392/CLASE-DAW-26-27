import express from "express";
import cors from "cors";
import array_frutas from "./data.json" with { type: "json" };

const app = express();

app.use(cors());

app.get("/api/frutas", (req, res) => {
  res.json(array_frutas);
  //res.status(200).json(array_frutas);
});

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});
