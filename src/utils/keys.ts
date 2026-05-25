const privateKey = process.env.PRIVATE_KEY
const creationKey = process.env.CREATION_KEY

if (!privateKey || !creationKey) {
    throw new Error("Private key or creation key not defined in .env file")
}

export { privateKey, creationKey }