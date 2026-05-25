"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createProduct;
const prisma_1 = __importDefault(require("../../utils/prisma"));
async function createProduct({ name, description, imageUrls, category, price, key, }) {
    try {
        if (key !== process.env.CREATION_KEY) {
            return { message: "Não autorizado", status: 401 };
        }
        if (!name || !description || !imageUrls || !category || !price) {
            return { message: "Todos os campos são obrigatórios", status: 400 };
        }
        const product = await prisma_1.default.product.create({
            data: {
                name,
                description,
                imageUrls,
                price,
                category,
            },
        });
        return {
            product,
            status: 201,
            message: "Produto criado com sucesso!",
        };
    }
    catch (e) {
        console.log(e);
        return {
            status: 400,
            message: "Erro interno no servidor",
        };
    }
}
//# sourceMappingURL=createProduct.js.map