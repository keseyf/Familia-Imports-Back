import app from "./utils/app";
import dotenv from "dotenv";
import cors from '@fastify/cors'

dotenv.config()

const port = process.env.PORT;

if (!port){
    throw new Error("Port not defined in .env file")
}

app.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"]
})

app.listen({
    port: parseInt(port)
}, ()=>{
    console.log(`Server is running on port ${port}`)
})