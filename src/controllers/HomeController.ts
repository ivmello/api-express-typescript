import { Response, Request } from "express";

class HomeController {
  async index(req: Request, res: Response): Promise<Response> {
    return res.json({
      data: "teste",
    });
  }
}

export default new HomeController();
