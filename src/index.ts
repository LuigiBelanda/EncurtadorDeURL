import { URLController } from "./controller/URLController";
import express from "express";

const api = express();
api.use(express.json());

// rota de encurtar a URL
const urlController = new URLController();
api.post("/shorten", urlController.shorten);

// rota para redirecionar a URL
api.get("/:hash", urlController.redirect);

api.listen(5000, () => console.log("Express listening"));
