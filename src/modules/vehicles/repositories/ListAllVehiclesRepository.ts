import { Vehicle } from "@prisma/client";
import { prisma } from "../../..";

export async function listAllVehicles(): Promise<Vehicle[]> {
    const vehicles = await prisma.vehicle.findMany();

    return vehicles;
}