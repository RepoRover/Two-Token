import { Router } from "express";
import {
  login,
  signup,
  checkUserNameAndPwd,
} from "./../controllers/authControllers";

const router = Router();

router.route("/login").post(checkUserNameAndPwd, login);
router.route("/signup").post(checkUserNameAndPwd, signup);

export default router;
