export default function adminLogin({ username, password }: {
    username: string;
    password: string;
}): Promise<{
    message: string;
    token?: never;
} | {
    token: string;
    message: string;
}>;
//# sourceMappingURL=adminLogin.d.ts.map