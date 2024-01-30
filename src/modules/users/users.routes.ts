import { Router } from 'express';
// import multer from 'multer';
// import { storage } from '../../utils/multerConfig';
import { loginController } from './controllers/LoginController';

const usersRoutes = Router();
// const upload = multer({ storage });

usersRoutes.post("/login", (request, response) => {
    return loginController(request, response);
});

export { usersRoutes }