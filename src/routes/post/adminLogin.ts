import jsonwebtoken from "jsonwebtoken";
import Cookies from "universal-cookie";

const jwt= jsonwebtoken;
const cookies = new Cookies()

export default async function adminLogin({ username, password }: { username: string, password: string   }) {
    if (!username){
        return { message: "Username é obrigatório" }
    }
    if (!password){
        return { message: "Password é obrigatório" }
    }

    if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
        return { message: "Credenciais inválidas" }
    }

    const token = jwt.sign({ username }, process.env.PRIVATE_KEY!, { expiresIn: "3d" });
    return { token, message: "Login realizado com sucesso!" };
}
