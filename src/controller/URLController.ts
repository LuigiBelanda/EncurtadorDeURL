import { Request, Response } from "express";
import shortId from "shortid";
import { config } from "../config/Constants";

export class URLController {
  // aqui temos uma função assíncrona que irá encurtar as URLs (pois teremos que uma buscar coisas no bd)
  // e como retorno temos uma Promise, justamente por termos que consultar o BD
  // <void> = tipo de dado que esperamos
  public async shorten(req: Request, res: Response): Promise<void> {
    // ver se a URL já não existe

    // Criar hash para a URL
    // pegando a URL que vem pela requisição
    const { originURL } = req.body;
    // montando um hash único
    const hash = shortId.generate();
    // pegando a prop API_URL do objeto config do arquivo Constants e juntando com o hash que geramos
    const shortURL = `${config.API_URL}/${hash}`;

    // Salvar URL no banco

    // Retornar a URL salva
    res.json({ originURL, hash, shortURL });
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    // pegar o hash da URL
    const { hash } = req.params;
    // Encontrar a URL original pelo hash
    const url = {
      originURL: "https://nodejs.org/en/",
      hash: "6ld2RB_Bn",
      shortURL: "http://localhost:5000/6ld2RB_Bn",
    };
    // redirecionar para a URL original a partir no que encontramos no BD
    res.redirect(url.originURL);
  }
}
