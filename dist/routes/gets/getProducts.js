"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getProducts;
const prisma_1 = __importDefault(require("../../utils/prisma"));
async function getProducts() {
    const products = await prisma_1.default.product.findMany();
    return { products, status: 200 };
}
//# sourceMappingURL=getProducts.js.map