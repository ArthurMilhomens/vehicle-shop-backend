import { Request, Response } from "express";
import { listAllVehicles } from "../repositories/ListAllVehiclesRepository";
import { deleteVehicle } from "../repositories/DeleteVehicleRepository";
import { Token } from "../../../utils/jwt";

const jwt = new Token();

export async function deleteVehicleController(req: Request, res: Response) {
    const { id } = req.query;
    const vehicles = await listAllVehicles();
    const accessToken = req.headers['authorization'] ?? "";
    const verify: any = accessToken !== "" && await jwt.verifyAccessToken(accessToken);

    if (!verify.payload || accessToken === "") {
        return res.status(403).send({ message: "Não autorizado."})
    }

    const vehicleAlreadyExists = vehicles.find(vehicle => vehicle.id === id)

    if (vehicleAlreadyExists) {
        await deleteVehicle(vehicleAlreadyExists.id)

        return res.status(200).json({ message: "Veículo deletado." })
    } else {
        return res.status(404).json({ message: "Veículo não encontrado." })
    }
}
