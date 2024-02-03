import { Vehicle } from "@prisma/client";
import { UpdateVehicle } from "../model/vehicles";
import { prisma } from "../../..";

export async function updateVehicle(data: UpdateVehicle, vehicleId: string): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.update({
        where: { id: vehicleId },
        data: data,
    });

    return vehicle
}