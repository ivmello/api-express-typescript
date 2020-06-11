import { Response, Request } from "express";
import db from "../database";

class HomeController {
  async index(req: Request, res: Response): Promise<Response> {
    return res.json({
      data: "Bem-vindo a API Shapeweb Catálogo",
    });
  }
}

export default new HomeController();
