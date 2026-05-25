import app from "./utils/app";
import serverless from "serverless-http";

// Converte o Fastify pra um handler serverless
export default serverless(app as any);