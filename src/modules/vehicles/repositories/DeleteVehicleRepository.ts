import { PrismaClient } from "@prisma/client";

export async function deleteVehicle(vehicleId: string): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.vehicle.delete({
        where: { id: vehicleId },
    });

    return
}