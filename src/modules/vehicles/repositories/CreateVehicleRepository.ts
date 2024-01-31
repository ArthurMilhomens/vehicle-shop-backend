import { PrismaClient, Vehicle } from "@prisma/client";
import { CreateVehicle } from "../model/vehicles";

export async function createVehicle(data: CreateVehicle): Promise<Vehicle> {
    const prisma = new PrismaClient();

    const vehicle = await prisma.vehicle.create({
        data,
    });

    return vehicle;
}