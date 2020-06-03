import { Router } from "express";
import HomeController from "./controllers/HomeController";
import CompaniesController from "./controllers/CompaniesController";

const router = Router();

// home
router.get("/", HomeController.index);

// companies
router.get("/companies", CompaniesController.index);
router.get("/companies/:id", CompaniesController.show);
router.post("/companies", CompaniesController.create);
router.put("/companies/:id", CompaniesController.update);
router.delete("/companies/:id", CompaniesController.delete);

export default router;
