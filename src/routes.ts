import { Router } from "express";
import HomeController from "./controllers/HomeController";

const router = Router();

// home
router.get("/", HomeController.index);

export default router;
