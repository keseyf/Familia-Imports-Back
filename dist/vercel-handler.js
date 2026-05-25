"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const app_1 = __importDefault(require("./utils/app"));
async function handler(req, res) {
    await app_1.default.ready(); // garante que o Fastify esteja pronto
    app_1.default.server.emit("request", req, res);
}
//# sourceMappingURL=vercel-handler.js.map