"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creationKey = exports.privateKey = void 0;
const privateKey = process.env.PRIVATE_KEY;
exports.privateKey = privateKey;
const creationKey = process.env.CREATION_KEY;
exports.creationKey = creationKey;
if (!privateKey || !creationKey) {
    throw new Error("Private key or creation key not defined in .env file");
}
//# sourceMappingURL=keys.js.map