import fastify from "fastify";
import { getRoutes, postRoutes } from "../routes/routes";

const app = fastify();

// Registro de rotas
app.register(getRoutes)
app.register(postRoutes)

export default app;