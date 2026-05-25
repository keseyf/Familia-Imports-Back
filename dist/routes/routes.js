"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = getRoutes;
exports.postRoutes = postRoutes;
const createProduct_1 = __importDefault(require("./post/createProduct"));
const getProducts_1 = __importDefault(require("./gets/getProducts"));
// Get Routes
async function getRoutes(app) {
    app.get("/products", async (req, res) => {
        const response = await (0, getProducts_1.default)();
        if (!response.products || (await response.products).length === 0)
            return res.status(404).send({ message: "Nenhum produto encontrado." });
        res.status(200).send(response);
    });
}
// Post Routes
async function postRoutes(app) {
    // Criar produto base
    app.post("/create/product", async (req, res) => {
        try {
            console.log(req.body);
            const { name, description, imageUrls, category, price, key } = req.body;
            if (!name || !description || !imageUrls) {
                return res.status(400).send({
                    message: "Todos os campos são obrigatórios"
                });
            }
            const result = await (0, createProduct_1.default)({
                name,
                description,
                imageUrls,
                category,
                price,
                key
            });
            return res.status(201).send(result);
        }
        catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "Erro interno"
            });
        }
    });
}
//# sourceMappingURL=routes.js.map