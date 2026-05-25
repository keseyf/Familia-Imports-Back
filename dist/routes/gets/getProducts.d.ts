export default function getProducts(): Promise<{
    products: {
        name: string;
        description: string;
        imageUrls: string[];
        category: string;
        price: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
    status: number;
}>;
//# sourceMappingURL=getProducts.d.ts.map