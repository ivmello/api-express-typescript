import { Response, Request } from "express";

class HomeController {
  async index(req: Request, res: Response): Promise {
    return res.json({
      data: "teste",
    });
  }
}

export default new HomeController();
