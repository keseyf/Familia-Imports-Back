import app from "./utils/app";
import serverless from "serverless-http";

const handler = serverless(app as any);

export default async function(req: any, res: any) {
  await app.ready();
  return handler(req, res);
}