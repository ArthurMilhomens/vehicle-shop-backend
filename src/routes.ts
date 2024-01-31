import { Router } from "express";
import { usersRoutes } from "./modules/users/users.routes";
import { vehiclesRoutes } from "./modules/vehicles/vehicles.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/vehicles", vehiclesRoutes);

export { router }