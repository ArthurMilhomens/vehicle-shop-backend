import { PrismaClient, User } from "@prisma/client";
import { CreateUser } from "../model/user";

export async function createUser(data: CreateUser): Promise<User> {
    const prisma = new PrismaClient();

    const user = await prisma.user.create({
        data,
    });

    return user;
}