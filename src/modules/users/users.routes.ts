import { Router } from 'express';
import { loginController } from './controllers/LoginController';
import { createUserController } from './controllers/CreateUserController';

const usersRoutes = Router();

usersRoutes.post("/login", (request, response) => {
    return loginController(request, response);
});

usersRoutes.post("/create", (request, response) => {
    return createUserController(request, response);
});

export { usersRoutes }