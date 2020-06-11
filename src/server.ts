import * as dotenv from "dotenv";
import app from "./app";

dotenv.config();
const PORT: string | number = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
