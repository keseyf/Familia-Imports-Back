export default function createOrder({ userFirstName, userLastName, userEmail, userPhone, userAddress, cart }: {
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    userPhone: string;
    userAddress: string;
    cart: {
        productVariantId: string;
        quantity: number;
    }[];
}): Promise<{
    order: any;
    message: string;
}>;
//# sourceMappingURL=createOrder.d.ts.map