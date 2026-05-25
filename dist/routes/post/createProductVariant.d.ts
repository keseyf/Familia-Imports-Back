export default function createProductVariant({ productId, price, size, quantity }: {
    productId: string;
    price: number;
    size: string;
    quantity: number;
}): Promise<{
    product: {
        id: string;
        createdAt: Date;
        productId: string;
        size: string;
        quantity: number;
        price: number;
    };
    message: string;
}>;
//# sourceMappingURL=createProductVariant.d.ts.map