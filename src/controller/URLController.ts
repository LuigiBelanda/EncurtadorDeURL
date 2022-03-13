import { URLModel } from "../database/model/URL";
import { Request, Response } from "express";
import shortId from "shortid";
import { config } from "../config/Constants";

export class URLController {
  // aqui temos uma função assíncrona que irá encurtar as URLs (pois teremos que uma buscar coisas no bd)
  // e como retorno temos uma Promise, justamente por termos que consultar o BD
  // <void> = tipo de dado que esperamos
  public async shorten(req: Request, res: Response): Promise<void> {
    // ver se a URL já não existe
    const { originURL } = req.body;
    // vendo se a URL que queremos encurtar já existe no bd
    const url = await URLModel.findOne({ originURL });
    // se existir apenas fazemos o redirect
    if (url) {
      res.json(url);
      return;
    }

    // Criar hash para a URL
    // montando um hash único
    const hash = shortId.generate();
    // pegando a prop API_URL do objeto config do arquivo Constants e juntando com o hash que geramos
    const shortURL = `${config.API_URL}/${hash}`;

    // Salvar URL no banco
    const newURL = await URLModel.create({ hash, shortURL, originURL });
    res.json(newURL);

    // Retornar a URL salva
    res.json({ originURL, hash, shortURL });
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    // pegar o hash da URL
    const { hash } = req.params;
    // Encontrar a URL original pelo hash
    const url = await URLModel.findOne({ hash });
    if (url) {
      // redirecionar para a URL original a partir no que encontramos no BD
      res.redirect(url.originURL);
      return;
    }

    res.status(400).json({ error: "URL not found" });
  }
}
