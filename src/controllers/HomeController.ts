import { Response, Request } from "express";
import db from "../database";

class HomeController {
  async index(req: Request, res: Response): Promise<Response> {
    const results = await db("users").select("*");

    return res.json(results);
  }
}

export default new HomeController();
