import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import jobRoutes from "./routes/jobroute.js";
import userRoutes from "./routes/userroute.js";


dotenv.config();
const app = Express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//users routues
app.post("/newuser", userRoutes);
app.post("/login", userRoutes);
app.post("/testlogin", userRoutes);


//jobs routes
app.get("/jobs", jobRoutes);
app.post("/newjob", jobRoutes);
app.delete("/delete/:id", jobRoutes);
app.post("/getjobs", jobRoutes);


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });