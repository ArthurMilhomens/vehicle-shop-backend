import { User } from "@prisma/client";
import { CreateUser } from "../model/user";
import { prisma } from "../../..";

export async function createUser(data: CreateUser): Promise<User> {
    const user = await prisma.user.create({
        data,
    });

    return user;
}