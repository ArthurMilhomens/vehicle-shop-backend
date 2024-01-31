import { Router } from 'express';
import multer from 'multer';
import { storage } from '../../utils/multerConfig';
import { listAllVehiclesController } from './controllers/ListAllVehiclesController';
import { createVehicleController } from './controllers/CreateVehicleController';
import { updateVehicleController } from './controllers/UpdateVehicleController';
import { deleteVehicleController } from './controllers/DeleteVehicleController';

const vehiclesRoutes = Router();
const upload = multer({ storage });

vehiclesRoutes.get("/", (request, response) => {
    return listAllVehiclesController(request, response);
});

vehiclesRoutes.delete("/", (request, response) => {
    return deleteVehicleController(request, response);
});

vehiclesRoutes.post("/", upload.single('image'), (request, response) => {
    return createVehicleController(request, response);
});

vehiclesRoutes.put("/update", upload.single('image'), (request, response) => {
    return updateVehicleController(request, response);
});

export { vehiclesRoutes }