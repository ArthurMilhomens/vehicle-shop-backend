import { Request, Response } from "express";
import { createVehicle } from "../repositories/CreateVehicleRepository";
import { Token } from "../../../utils/jwt";

const jwt = new Token();

export async function createVehicleController(req: Request, res: Response) {
    const data = JSON.parse(req.body.Data);
    const file = req.file;
    const accessToken = req.headers['authorization'] ?? "";
    const verify: any = accessToken !== "" && await jwt.verifyAccessToken(accessToken);

    if (!verify.payload || accessToken === "") {
        return res.status(403).send({ message: "Não autorizado."})
    }

    const vehicle = await createVehicle({
        ...data,
        image: file?.filename,
    });

    return res.status(201).json(vehicle);
}
