import { Vehicle } from "@prisma/client";
import { CreateVehicle } from "../model/vehicles";
import { prisma } from "../../..";

export async function createVehicle(data: CreateVehicle): Promise<Vehicle> {
    const vehicle = await prisma.vehicle.create({
        data,
    });

    return vehicle;
}