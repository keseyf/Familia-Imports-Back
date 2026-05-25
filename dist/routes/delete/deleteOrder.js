"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderManual = deleteOrderManual;
exports.deleteOrder = deleteOrder;
const prisma_1 = __importDefault(require("../../utils/prisma"));
function deleteOrderManual(id) {
    const order = prisma_1.default.order.delete({
        where: {
            id
        }
    });
    if (!order)
        return { message: "Pedido não encontrado" };
    return { order, message: "Pedido excluído com sucesso" };
}
function deleteOrder(id) {
    const order = prisma_1.default.order.delete({
        where: {
            id
        },
    });
    if (!order)
        return { message: "Pedido não encontrado" };
    return { order, message: "Pedido excluído com sucesso" };
}
//# sourceMappingURL=deleteOrder.js.map