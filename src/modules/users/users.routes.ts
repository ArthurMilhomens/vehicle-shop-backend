import { Router } from 'express';
import { loginController } from './controllers/LoginController';

const usersRoutes = Router();

usersRoutes.post("/login", (request, response) => {
    return loginController(request, response);
});

export { usersRoutes }