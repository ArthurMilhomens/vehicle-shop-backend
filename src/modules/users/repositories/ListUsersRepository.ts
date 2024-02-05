import { PrismaClient } from "@prisma/client";

export async function getUsers() {
    const prisma = new PrismaClient();

    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
        }
    });

    return users
}