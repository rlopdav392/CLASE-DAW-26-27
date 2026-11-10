import express from "express";
import cors from "cors";
import peliculas from "./data.json" with { type: "json" };

const app = express();

app.use(cors());

app.get("/api/peliculas", (req, res) => {
    //res.status(200).json(peliculas);
    res.json(peliculas);
   
});

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000");
});