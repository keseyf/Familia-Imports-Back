import app from "./utils/app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
if (!port) throw new Error("Port not defined in .env file");

app.listen({ port: parseInt(port) }, () => {
  console.log(`Server is running on port ${port}`);
});