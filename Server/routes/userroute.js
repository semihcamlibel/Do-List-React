import Express from "express";
import { getUser, newUser} from "../controller/usercontroller.js";
const router = Express.Router();

router.post("/login", getUser);
router.post("/newuser", newUser);


export default router;