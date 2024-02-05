import { Request, Response } from "express";
import { createUser } from "../repositories/CreateUserRepository";
import { getUsers } from "../repositories/ListUsersRepository";

export async function createUserController(req: Request, res: Response) {
    const data = req.body;
    const users = await getUsers();

    const userAlreadyExists = users.find(user => user.email === data.email)

    if (userAlreadyExists) {
        return res.status(400).json({ message: "Usuário já existe." })
    }

    await createUser(data);

    return res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
}
