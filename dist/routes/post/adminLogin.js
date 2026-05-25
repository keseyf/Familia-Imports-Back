"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = adminLogin;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const universal_cookie_1 = __importDefault(require("universal-cookie"));
const jwt = jsonwebtoken_1.default;
const cookies = new universal_cookie_1.default();
async function adminLogin({ username, password }) {
    if (!username) {
        return { message: "Username é obrigatório" };
    }
    if (!password) {
        return { message: "Password é obrigatório" };
    }
    if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
        return { message: "Credenciais inválidas" };
    }
    const token = jwt.sign({ username }, process.env.PRIVATE_KEY, { expiresIn: "3d" });
    return { token, message: "Login realizado com sucesso!" };
}
//# sourceMappingURL=adminLogin.js.map