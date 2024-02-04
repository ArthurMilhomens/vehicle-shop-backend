import { User } from "@prisma/client";
import { CreateUser } from "../model/user";
import { prisma } from "../../..";
import bcrypt from 'bcryptjs';

export async function createUser(data: CreateUser): Promise<User> {
    data.password = bcrypt.hashSync(data.password, 8);
    
    const user = await prisma.user.create({
        data,
    });

    return user;
}