"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getOrders;
const prisma_1 = __importDefault(require("../../utils/prisma"));
function getOrders() {
    const orders = prisma_1.default.order.findMany({
        where: {
            status: "pending"
        }
    });
    return { orders };
}
//# sourceMappingURL=getOrders.js.map