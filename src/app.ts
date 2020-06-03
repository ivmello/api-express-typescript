import path from "path";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import * as dotenv from "dotenv";
import routes from "./routes";

class App {
  private app: express.Application;

  constructor() {
    dotenv.config();

    this.app = express();

    this.initDatabase();
    this.initMiddlewares();
    this.initRoutes();
  }

  initDatabase(): void {
    //
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
  }

  listen(): void {
    const PORT: string | number = process.env.PORT || 4000;

    this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

export default new App();
