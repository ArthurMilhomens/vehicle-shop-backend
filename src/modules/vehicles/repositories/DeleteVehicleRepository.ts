import { prisma } from "../../..";

export async function deleteVehicle(vehicleId: string): Promise<void> {
    await prisma.vehicle.delete({
        where: { id: vehicleId },
    });

    return
}