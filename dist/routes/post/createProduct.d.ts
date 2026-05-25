interface CreateProductProps {
    name: string;
    description: string;
    imageUrls: string[];
    category: string;
    price: number;
    key: string;
}
export default function createProduct({ name, description, imageUrls, category, price, key, }: CreateProductProps): Promise<{
    message: string;
    status: number;
    product?: never;
} | {
    product: {
        name: string;
        description: string;
        imageUrls: string[];
        category: string;
        price: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    };
    status: number;
    message: string;
}>;
export {};
//# sourceMappingURL=createProduct.d.ts.map