import Express from "express";
import {createJobs, deleteJobs, findJobs} from "../controller/jobcontroller.js";
const router = Express.Router();


router.post("/newjob", createJobs);
router.delete("/delete/:id", deleteJobs);
router.post("/getjobs", findJobs);



export default router;