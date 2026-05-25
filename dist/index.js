"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./utils/app"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("@fastify/cors"));
dotenv_1.default.config();
const port = process.env.PORT;
if (!port) {
    throw new Error("Port not defined in .env file");
}
app_1.default.register(cors_1.default, {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"]
});
app_1.default.listen({
    port: parseInt(port)
}, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map