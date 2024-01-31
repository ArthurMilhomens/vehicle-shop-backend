import { PrismaClient, Vehicle } from "@prisma/client";

export async function listAllVehicles(): Promise<Vehicle[]> {
    const prisma = new PrismaClient();

    const vehicles = await prisma.vehicle.findMany();

    return vehicles;
}