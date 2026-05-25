"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const app_1 = __importDefault(require("./utils/app"));
const serverless_http_1 = __importDefault(require("serverless-http"));
let handler;
async function default_1(req, res) {
    if (!handler) {
        await app_1.default.ready();
        handler = (0, serverless_http_1.default)(app_1.default);
    }
    return handler(req, res);
}
//# sourceMappingURL=vercel-handler.js.map