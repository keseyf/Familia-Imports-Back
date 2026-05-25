"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createProductVariant;
const prisma_1 = __importDefault(require("../../utils/prisma"));
async function createProductVariant({ productId, price, size, quantity }) {
    const product = await prisma_1.default.productVariant.create({
        data: {
            productId,
            price,
            size,
            quantity
        }
    });
    return { product, message: "Variante do produto criada com sucesso!" };
}
//# sourceMappingURL=createProductVariant.js.map