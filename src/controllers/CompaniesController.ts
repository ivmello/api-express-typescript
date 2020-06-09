import { Response, Request } from "express";
import db from "../database";

class CompaniesController {
  async index(req: Request, res: Response): Promise<Response> {
    const results = await db("companies")
      .where({
        status: true,
        deleted: false,
      })
      .orderBy("id", "desc");

    return res.json(results);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const result = await db("companies").select("*").where({
      id,
      status: true,
      deleted: false,
    });

    return res.json(result);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { user_id, name, description } = req.body;

    const result = await db("companies").insert({
      user_id,
      name,
      image: req.file.filename,
      description,
    });

    let resultJson = {
      success: true,
      error: {},
    };

    if (!result) {
      resultJson = {
        success: false,
        error: {
          status: 1,
          message: "Error to create company",
        },
      };
    }

    return res.json(resultJson);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const { name, description } = req.body;

    const result = await db("companies")
      .where({
        id,
        status: true,
        deleted: false,
      })
      .update({
        name,
        description,
      });

    let resultJson = {
      success: true,
      error: {},
    };

    if (!result) {
      resultJson = {
        success: false,
        error: {
          status: 1,
          message: "Error to update",
        },
      };
    }

    return res.json(resultJson);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    const result = await db("companies")
      .where({
        id,
        status: true,
        deleted: false,
      })
      .delete();

    let resultJson = {
      success: true,
      error: {},
    };

    if (!result) {
      resultJson = {
        success: false,
        error: {
          status: 1,
          message: "Error to create",
        },
      };
    }

    return res.json(resultJson);
  }
}

export default new CompaniesController();
