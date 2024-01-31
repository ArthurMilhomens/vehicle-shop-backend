import { PrismaClient, Vehicle } from "@prisma/client";
import { UpdateVehicle } from "../model/vehicles";

export async function updateVehicle(data: UpdateVehicle, vehicleId: string): Promise<Vehicle> {
    const prisma = new PrismaClient();

    const vehicle = await prisma.vehicle.update({
        where: { id: vehicleId },
        data: data,
    });

    return vehicle
}