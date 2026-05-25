import prisma from "../../utils/prisma";

export default async function getProducts() {
    const products = await prisma.product.findMany();
    return { products, status: 200 };
}