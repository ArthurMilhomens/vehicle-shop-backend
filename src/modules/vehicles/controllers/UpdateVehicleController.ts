import { Request, Response } from "express";
import { listAllVehicles } from "../repositories/ListAllVehiclesRepository";
import { updateVehicle } from "../repositories/UpdateVehicleRepository";
import { UpdateVehicle } from "../model/vehicles";
import { Token } from "../../../utils/jwt";
import { unlink } from 'node:fs';

const jwt = new Token();

export async function updateVehicleController(req: Request, res: Response) {
    const data: UpdateVehicle = req.body;
    const { id } = req.query;
    const file = req.file;
    const accessToken = req.headers['authorization'] ?? "";
    const verify: any = accessToken !== "" && await jwt.verifyAccessToken(accessToken);

    if (!verify.paylaod || accessToken === "") {
        return res.status(403).send({ message: "Não autorizado."})
    }

    const vehicles = await listAllVehicles();

    const vehicleAlreadyExists = vehicles.find(vehicle => vehicle.id === id)

    if (vehicleAlreadyExists) {
        unlink(`../../../../uploads/${vehicleAlreadyExists.image}`, async () => {
            const updatedVehicle = await updateVehicle({
                ...data,
                image: file?.filename
            }, vehicleAlreadyExists.id)
    
            return res.status(200).json(updatedVehicle)
        });
    }

    return res.status(404).json({ message: "Vehicle not found" })
}

