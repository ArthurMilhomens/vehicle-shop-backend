import { Router } from "express";
import { usersRoutes } from "./modules/users/users.routes";

// import { cardsRoutes } from "./modules/cards/cards.routes";

const router = Router();

router.use("/users", usersRoutes);
// router.use("/vehicles", cardsRoutes);

export { router }