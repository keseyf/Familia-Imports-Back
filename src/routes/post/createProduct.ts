
import prisma from "../../utils/prisma";

interface CreateProductProps {
  name: string;
  description: string;
  imageUrls: string[];
  category: string;
  price: number;
  key: string;
}

export default async function createProduct({
  name,
  description,
  imageUrls,
  category,
  price,
  key,
}: CreateProductProps) {

  try {

    if (key !== process.env.CREATION_KEY) {
      return { message: "Não autorizado", status: 401 };
    }

    if (!name || !description || !imageUrls || !category || !price) {
      return { message: "Todos os campos são obrigatórios", status: 400 };
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        imageUrls,
        price,
        category,
      },
    });

    return {
      product,
      status: 201,
      message: "Produto criado com sucesso!",
    };

  } catch (e) {

    console.log(e);

    return {
      status: 400,
      message: "Erro interno no servidor",
    };
  }
}