"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createOrder;
const prisma_1 = __importDefault(require("../../utils/prisma"));
async function createOrder({ userFirstName, userLastName, userEmail, userPhone, userAddress, cart }) {
    // Buscar variantes dos produtos
    const variants = await prisma_1.default.productVariant.findMany({
        where: {
            id: {
                in: cart.map(item => item.productVariantId)
            }
        }
    });
    let totalPrice = 0;
    // Montar produtos da ordem
    const orderProductsData = cart.map(item => {
        const variant = variants.find(v => v.id === item.productVariantId);
        if (!variant) {
            throw new Error("Variante do produto não encontrada");
        }
        // Validar estoque
        if (variant.quantity < item.quantity) {
            throw new Error("Estoque insuficiente");
        }
        // Calcular total
        totalPrice += variant.price * item.quantity;
        return {
            productVariantId: item.productVariantId,
            quantity: item.quantity
        };
    });
    // Criar pedido
    const order = await prisma_1.default.order.create({
        data: {
            userFirstName,
            userLastName,
            userEmail,
            userPhone,
            userAddress,
            totalPrice,
            status: "pending",
            products: {
                create: orderProductsData
            }
        },
        include: {
            products: {
                include: {
                    productVariant: {
                        include: {
                            product: true
                        }
                    }
                }
            }
        }
    });
    // Atualizar estoque
    for (const item of cart) {
        const variant = variants.find(v => v.id === item.productVariantId);
        if (!variant)
            continue;
        await prisma_1.default.productVariant.update({
            where: {
                id: variant.id
            },
            data: {
                quantity: variant.quantity - item.quantity
            }
        });
    }
    return {
        order,
        message: "Pedido criado com sucesso!"
    };
}
//# sourceMappingURL=createOrder.js.map