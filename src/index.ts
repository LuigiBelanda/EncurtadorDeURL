import express from "express";
import { URLController } from "./controller/URLController";
import { MongoConnection } from "./database/MongoConnection";

const api = express();
api.use(express.json());

// chamando a classe que criamos no arquivo MongoConnection para fazer a conexão com o banco
const database = new MongoConnection()
database.connect()

// rota de encurtar a URL
const urlController = new URLController();
api.post("/shorten", urlController.shorten);

// rota para redirecionar a URL
api.get("/:hash", urlController.redirect);

api.listen(5000, () => console.log("Express listening"));
