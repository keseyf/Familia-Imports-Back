import fastify from "fastify";
import cors from "@fastify/cors";
import { getRoutes, postRoutes } from "../routes/routes";

const app = fastify();

app.register(cors, { origin: "*", methods: ["GET", "POST", "DELETE", "PUT"] });
app.register(getRoutes);
app.register(postRoutes);

export default app;