import path from "path";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import * as dotenv from "dotenv";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";
class App {
  private app: express.Application;

  constructor() {
    dotenv.config();

    this.app = express();

    this.initMiddlewares();
    this.initRoutes();
  }

  initMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(morgan("combined"));
  }

  initRoutes(): void {
    this.app.use("/", routes);
    this.app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  listen(): void {
    const PORT: string | number = process.env.PORT || 4000;

    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

export default new App();
