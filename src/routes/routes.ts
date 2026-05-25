import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import createProduct from "./post/createProduct";
import getProducts from "./gets/getProducts";

// Get Routes
export async function getRoutes(app: FastifyInstance){

app.get("/", async (req: FastifyRequest, res: FastifyReply)=>{
    res.status(200).send({message: "Hello World!"})
})

app.get("/products", async (req: FastifyRequest, res: FastifyReply)=>{
    const response = await getProducts()
    if(!response.products || (await response.products).length === 0) return res.status(404).send({message: "Nenhum produto encontrado."})
    res.status(200).send(response)
})

}


// Post Routes
export async function postRoutes(app: FastifyInstance){

// Criar produto base

app.post("/create/product", async (req, res) => {

    try {

        console.log(req.body);

        const { name, description, imageUrls, category, price, key } = req.body as { name: string, description: string, imageUrls: string[], category: string, price: number, key: string };

        if (!name || !description || !imageUrls) {
            return res.status(400).send({
                message: "Todos os campos são obrigatórios"
            });
        }

        const result = await createProduct({
            name,
            description,
            imageUrls,
            category,
            price,
            key
        });

        return res.status(201).send(result);

    } catch (e) {

        console.log(e);

        return res.status(500).send({
            message: "Erro interno"
        });
    }
});
}
