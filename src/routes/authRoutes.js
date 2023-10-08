import { Router } from "express";
import { login, signup } from "./../controllers/authControllers";

const router = Router();

router.route("/login").post(login);
router.route("/signup").post(signup);

export default router;
