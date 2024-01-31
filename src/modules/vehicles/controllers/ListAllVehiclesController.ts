import { Request, Response } from "express";
import { listAllVehicles } from "../repositories/ListAllVehiclesRepository";

export async function listAllVehiclesController(req: Request, res: Response) {
    const vehicles = await listAllVehicles();

    return res.status(200).json(vehicles);
}