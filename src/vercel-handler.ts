import app from "./utils/app";

export default async function handler(req:any, res:any) {
  await app.ready();           // garante que o Fastify esteja pronto
  app.server.emit("request", req, res);
}