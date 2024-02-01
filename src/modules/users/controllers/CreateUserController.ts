import { Request, Response } from "express";
import { createUser } from "../repositories/CreateUserRepository";

export async function createUserController(req: Request, res: Response) {
    const data = req.body;

    const user = await createUser(data);

    return res.status(201).json(user);
}
