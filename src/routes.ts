import { Router } from "express";
import HomeController from "./controllers/HomeController";
import CompaniesController from "./controllers/CompaniesController";
import multer from "multer";
import multerConfig from "./uploader";

const router = Router();
const upload = multer(multerConfig);

// home
router.get("/", HomeController.index);

// companies
router.get("/companies", CompaniesController.index);
router.get("/companies/:id", CompaniesController.show);
router.post("/companies", upload.single("image"), CompaniesController.create); // faz o upload via middleware
router.put("/companies/:id", CompaniesController.update);
router.delete("/companies/:id", CompaniesController.delete);

export default router;
