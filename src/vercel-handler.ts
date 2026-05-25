import app from "./utils/app";
import serverless from "serverless-http";

let handler: any;

export default async function(req: any, res: any) {
  if (!handler) {
    await app.ready();
    handler = serverless(app as any);
  }
  return handler(req, res);
}